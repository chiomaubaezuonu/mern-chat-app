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
            type: String
        },
        image: {
            type: String
        },
    },
    { timestamps: true }
)

const Message = mongoose.model("Message", MessageSchema)

export default Message;