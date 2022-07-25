const { Post } = require('../models');

const postData = [
    {
        title: "Post about tech news",
        post_content: "This is a post about some breaking tech news.",
        user_id: 1
    },
    {
        title: "Another post on tech news",
        post_content: "A post about some important news in tech.",
        user_id: 2
    },
    {
        title: "Review of tech",
        post_content: "This is reviewing some new tech. My thoughts are...",
        user_id: 1

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;