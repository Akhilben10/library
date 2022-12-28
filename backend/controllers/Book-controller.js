import Book from "../models/Book.js";


export const getAllBooks = async (req, res, next) => {
    let books;
    try{
        books =await Book.find();
    } catch (err) {
        return console.log(err)
    }
    if (!books){
        return res.this.status(404).json({message:"No books Found"})
    }
    return res.status(200).json({books})
}

export const addBook =  async (req, res, next) => {
    const {book_name , no_of_pages , book_price , description, user } = req.body;
    const book =  new Book({
        book_name,
        no_of_pages,
        book_price,
        description,
        user,
    });
    try{
       await book.save()
    } catch (err){
        return console.log(err)
    }
    return res.status(200).json({book})
}

export const updateBook = async (req , res , next) => {
    const {book_name , no_of_pages , book_price , description , user } = req.body;
    const bookId = req.params.id;
    let book;
    try{
        book = await book.findByIdAndUpdate(bookId, {
            book_name,
            no_of_pages ,
            book_price,
            description,
            user


    })
} catch (err){
    return console.log(err)
}
if (!book){
    return res.status(500).json({message: "Unable To update book"})
}
return res.status(200).json({book})
}

export const getById = async (req , res , next ) => {
    const id = req.params.id;
    let book;
    try{
        book = await book.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!book){
        return res.status(404).json({message: "No book Found"})
    }
    return res.status(200).json({book});
}

export  const deleteBook =async (req , res ,next  ) => {
    const id = req.perams.id;

    let book ;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (err) {
    console.log(err);
    }
    if(!book){
        return res.status(500).json({messsage: "Unable To Delete book"})
    }
    return res.status(200).json({message:"Sucessfully Deleted"})
}
