// const { response } = require('express');
const express = require('express');
const cors = require('cors')
const routes = require('./route')
const connectDB = require('./db')

const server = express();

server.use(express.json());
server.use(cors())

const port = 5000;

connectDB()
server.use('/api/v1',routes)


// app.get("/",(req,res) => {
//     res.send("Hello World, from express")
// })
// app.post("/login",(req,res) => {
//     const { username, password} = req.body
//     // console.log(req.body);
//     let user = users.filter(data => data.username === username)
//     if(user.length == 1){
//         res.send({success: true, message:"Login successful"})

//         res.send({failure: true, message:'username or password is wrong'})
//     }else{
//         res.send({failure: true, message:"Login failed"})
//     }

//     console.log(user);
    
//     res.send("login")
// })


server.listen(port,() => console.log(`server is running at port ${port}.......`))