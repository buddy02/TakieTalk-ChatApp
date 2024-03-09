import mongoose from "mongoose";
import Message from "./message.model.js";
import User from "./user.model.js";

const conversationModel = mongoose.Schema({
  participants: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: User,
  }],
  messages: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: Message,
    default: [],
  }]
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationModel);

export default Conversation;
