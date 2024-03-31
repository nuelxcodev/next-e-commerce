import { GET, POST } from "../../auth"

export default function handler(req, res) {
    console.log(req.body)
    res.status(200).send('Welcome')
}

export { GET, POST };


