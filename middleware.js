import { getToken } from "next-auth/jwt"



export async function handler(req, res) {
    const path = req.nextURL.pathname
    console.log(path)
    const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET
    })

    const publicpath = path === "/" || path === "/auth/login"
    if (publicpath && token) {
        
        return res.redirect(new URL("/dashboard", req.nextURL))
    }
    if (!publicpath && !token) {
        return res.redirect(new URL("/auth/login", req.nextURL))
    }
}

export const config = {
    matcher: ["/", "/dashboard", "/auth/login"]
}