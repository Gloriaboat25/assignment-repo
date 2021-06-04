const express = require('express');
// have our router out of express
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request,response) =>{
    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password
                
            
        
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
    
})
router.post("/login",(request,response) => {
    const { username, password} = request.body
    // console.log(req.body);
    let user = users.filter(data => data.username === username)
    if(user.length == 1){
        response.send({success: true, message:"Login successful"})

        response.send({failure: true, message:'username or password is wrong'})
    }else{
        response.send({failure: true, message:"Login failed"})
    }

    console.log(user);
    
    response.send("login")
})

module.exports = router