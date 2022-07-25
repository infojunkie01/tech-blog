const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "user1@gmail.com",
        password: "password"
    },
    {
        username: "user2",
        email: "user2@gmail.com",
        password: "password"
    },
    {
        username: "user3",
        email: "user3@gmail.com",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;