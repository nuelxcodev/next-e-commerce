import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
    try {
        const { amount, cartitems, email } = req.body;

        console.log(req.headers.origin)

        if (!amount) {
            throw new Error("amount is required");
        }

        const session = await stripe.checkout.sessions.create({
            submit_type: "pay",
            payment_method_types: ["card"],
            customer_email: email,
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        unit_amount: amount * 100,
                        currency: "usd",
                        product_data: {
                            name: "NUELMAT",
                            description: `you are paying for ${cartitems.reduce((a, b) => a + b.quantity, 0)} items `
                        },
                    },
                },
            ],
            mode: "payment",
            success_url: `${req.headers.origin}/checkout/orders`,
            cancel_url: `${req.headers.origin}/checkout/payment`,
        });

        res.status(200).json({ sessionId: session.id });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err instanceof Error ? err.message : "Internal server error",
        });
    }
}