import express from "express";
import { addStudent , updateStudent , getById , deleteStudent, getAllStudents} from "../controllers/student-controller.js";
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/add",addStudent);
studentRouter.put('/update/:id',updateStudent);
studentRouter.get("/:id", getById);
studentRouter.delete("/:id",deleteStudent);

export default studentRouter;