import express from "express";
import { addBook , updateBook , getById , deleteBook, getAllBooks} from "../controllers/Book-controller.js";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/add",addBook);
bookRouter.put('/update/:id',updateBook);
bookRouter.get("/:id", getById);
bookRouter.delete("/:id",deleteBook);

export default bookRouter;