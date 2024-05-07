import mongoose from "mongoose";

const danceSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const D_Course = mongoose.model("dance_courses", danceSchema);

export default D_Course;