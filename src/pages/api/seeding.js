
import { dbconnection } from "../../../../lib/DatabaseConnect";
import User from "../../../models/user";
import data from '../../../utils/Data'
import Product from '../../../models/Product';


const handler = async (req, res) => {
    await dbconnection.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    res.send({ message: 'seeded successfully' });
  };
  export default handler;