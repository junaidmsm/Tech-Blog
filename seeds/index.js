const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "Junaid",
        password: "junaidpassword"
    },
    {
        username: "Ryan",
        password: "ryanpassword"
    },
    {
        username: "Sophie",
        password: "sophiepassword"
    },

]

const blogs = [
    {
        title: "My first post",
        content: "great",
        userId: 1
    },
    {
        title: "My second post",
        content: "amazing",
        userId: 1
    },
    {
        title: "Junaid's first post",
        content: "hi i'm here",
        userId: 2
    },
    {
        title: "Ryan's first post",
        content: "hi i'm Ryan",
        userId: 3
    },
]

const comments = [
    {
        body: "great post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "i agree!",
        blogId: 3,
        userId: 2
    },
    {
        body: "well said!",
        blogId: 4,
        userId: 1
    },
    {
        body: "happy days!",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()