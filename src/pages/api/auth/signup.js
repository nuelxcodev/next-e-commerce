/* eslint-disable no-unused-vars */
import { dbconnection } from "../../../../lib/DatabaseConnect";
import User from "../../../models/user";
import bcrypt from "bcrypt"

export default async function handler(req, res) {
 
  const { name, password, email } = req.body
  
  try {
    await dbconnection()
    const user = await User.findOne({ email })
    const salt = bcrypt.genSaltSync();
    const hashpassword = bcrypt.hashSync(password, salt)


    if (!user) {
      await User.create({ email, name, password: hashpassword })
    } else {
      res.status(400).json({ message: 'user alread exist' })
    }

  } catch (error) {
    console.log(error)
  }
  res.status(200).json({ text: 'user created' });
}