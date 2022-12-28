import Student from "../models/Student.js";

export const getAllStudents = async (req, res, next) => {
    let students;
    try{
        students =await Student.find();
    } catch (err) {
        return console.log(err)
    }
    if (!students){
        return res.this.status(404).json({message:"No data Found"})
    }
    return res.status(200).json({students})
}

export const addStudent =  async (req, res, next) => {
    const {student_name , dob , mobile_no , email, user } = req.body;
    const student =  new Student({
        student_name,
        dob,
        mobile_no,
        email,
        user,
    });
    try{
       await student.save()
    } catch (err){
        return console.log(err)
    }
    return res.status(200).json({student})
}

export const updateStudent = async (req , res , next) => {
    const {student_name , dob , mobile_no , email , user } = req.body;
    const studentId = req.params.id;
    let student;
    try{
        student = await Student.findByIdAndUpdate(studentId, {
            student_name,
            dob ,
            mobile_no,
            email,
            user


    })
} catch (err){
    return console.log(err)
}
if (!student){
    return res.status(500).json({message: "Unable To update the student"})
}
return res.status(200).json({student})
}

export const getById = async (req , res , next ) => {
    const id = req.params.id;
    let student;
    try{
        student = await Student.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!student){
        return res.status(404).json({message: "No Student Found"})
    }
    return res.status(200).json({student});
}

export  const deleteStudent =async (req , res ,next  ) => {
    const id = req.perams.id;

    let student ;
    try {
        student = await Student.findByIdAndRemove(id)
    } catch (err) {
    console.log(err);
    }
    if(!student){
        return res.status(500).json({messsage: "Unable To Delete Student"})
    }
    return res.status(200).json({message:"Sucessfully Deleted"})
}
