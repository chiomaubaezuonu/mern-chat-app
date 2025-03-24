import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId, //senderId will be a reference to the User model
            ref: "User",
            required: true,
        },
        text: {
            type: string
        },
        image: {
            type: string
        },
    },
    { timestamps: true }
)

const Message = mongoose.model("Message", MessageSchema)

export default Message;