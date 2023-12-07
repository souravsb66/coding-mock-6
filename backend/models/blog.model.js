const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    username: {
        type: String
    },
    userId: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: {
        type: [{
            username: {
                type: String,
                content: String
            }
        }]
    }
})

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel;