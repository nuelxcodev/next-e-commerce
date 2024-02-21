import mongoose from "mongoose";



const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    isadmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', Userschema);

export default User