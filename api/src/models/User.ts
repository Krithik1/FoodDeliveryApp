import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true,
            },
            postalCode: {
                type: String,
                required: true
            }
        },
        phone: {
            type: String,
            required: true
        },
        orders: [{
            type: Schema.Types.ObjectId,
            ref: "Order"
        }],
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);