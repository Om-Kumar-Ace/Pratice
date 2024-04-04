import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"
let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Hey 1st Todo", desc: "Discription of Todo ", isDone: false })
    res.send('Hello World! Om')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})