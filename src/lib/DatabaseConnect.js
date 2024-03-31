import moongose from "mongoose"


export const dbconnection = async () => {

    try {
        await moongose.connect(process.env.MONGO_URI)
        console.log("connection established")
    } catch (error) {
        throw new Error("Couldn't connect to db")
    }
}


