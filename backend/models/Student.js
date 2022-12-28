import mongoose  from "mongoose";


const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_name:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    mobile_no: {
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        require: true,
    }
});

export default mongoose.model("Student", studentSchema);