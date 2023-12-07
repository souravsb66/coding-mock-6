const express = require("express");
const BlogModel = require("../models/blog.model");
const auth = require("../middlewares/auth.middleware");

const blogRouter = express.Router();

blogRouter.get("/", async (req,res) => {
    const {userId} = req.body;

    try {
        const blogs = await BlogModel.find({userId});
        res.status(200).send(blogs);
    }
    catch(err) {
        console.log(err);
        res.status(400).send({error: err.message});
    }
})

blogRouter.post("/", auth, async (req,res) => {

    try {
        const blog = new BlogModel(req.body);
        await blog.save();

        res.status(200).send({message: "New Blog Created", blog});
    }
    catch(err) {
        console.log(err);
        res.status(400).send({error: err.message});
    }
})

module.exports = blogRouter;