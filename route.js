
const express = require('express')

const router = express.Router();
const usermodel = require('./usermodel')




router.get('/', function(request, response){
    response.status(200).send( "hello home")

})





router.post('/signup',function(request,response){


    response.status(200).send({message: "Successful"})
})

module.exports = router;