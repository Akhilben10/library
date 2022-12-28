import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
name : {
    type  : String,
    require : true
},
email: {
    type: String,
    required : true,
    unique: true
},
password :{
    type: String ,
    required: true,
    minLength: 6   
}
 } )
 export default mongoose.model("user", userSchema);