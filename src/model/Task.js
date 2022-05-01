import mongoose from "mongoose";

const Task = mongoose.model("Task", {
    title: String,
    description:String,
    done: Boolean,
})

export default Task;