import mongoose, { Schema } from "mongoose";

const OrderSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        restaurant: {
            type: Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        },
        products: [{
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }],
        status: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    });

export default mongoose.model("Order", OrderSchema);