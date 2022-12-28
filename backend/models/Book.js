import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_name:{
        type: String,
        required: true,
    },
    no_of_pages:{
        type: Number,
        required: true,
    },
    book_price: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        require: true,
    }
});

export default mongoose.model("Book", bookSchema);