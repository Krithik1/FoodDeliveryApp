import mongoose, { Schema } from "mongoose";

const RestaurantSchema: Schema = new Schema(
    {
        name: {
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
        menu: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        },],
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Restaurant", RestaurantSchema);