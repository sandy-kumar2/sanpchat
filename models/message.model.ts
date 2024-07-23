import mongoose, { Types, Document, Model, PopulatedDoc } from "mongoose";
import { UserDocument } from "./user.model";

export interface MessageInterface {
    senderId: Types.ObjectId | PopulatedDoc<UserDocument>;
    receiverId: Types.ObjectId | PopulatedDoc<UserDocument>;
    content: string;
    messageType: 'text' | 'image';
    opened: boolean;
}

export interface MessageDocument extends MessageInterface, Document {
    _id: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema = new mongoose.Schema<MessageDocument>({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    messageType: {
        type: String,
        required: true,
        enum: ['text', 'image'],
    },
    opened: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export const Message: Model<MessageDocument> = mongoose.models.Message || mongoose.model('Message', messageSchema);
