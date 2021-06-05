// importing express
const express = require('express');
const connectDB = require('./db')
const dotenv =  require('dotenv')
const cors = require('cors')
const routesUrl =  require("./routes/routes")
// specificing a port 
const port = 4000;


// intialize express in the app variable
const app = express();


dotenv.config()




  



 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/newEndpoint', (req, res) => {
//     res.send('This is me!')
//   })
app.use(express.json())
app.use(cors())
app.use('/app', routesUrl )
connectDB()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})