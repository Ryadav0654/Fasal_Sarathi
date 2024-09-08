import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/post", (req, res) => {
    console.log("hello");
    res.send("hello");
})


app.listen(8000, () => {
    console.log(`server is running on port ${8000}`);
})