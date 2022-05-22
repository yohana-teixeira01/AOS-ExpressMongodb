import mongoose from "mongoose";

const Extras = mongoose.model("Extras", {
    title: String,
    local: String,
    area: String, 
    initialDate: Date,
    endDate: Date,
    description: String,
    tag: Boolean,
})

export default Extras;