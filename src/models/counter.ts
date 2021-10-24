import { Schema, model } from 'mongoose'

const counterSchema = new Schema(
    {
        type: String,
        user: {
            type: Schema.Types.ObjectId,
            refs: 'User',
            required: true
        }
    }
)