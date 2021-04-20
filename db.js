const mongoose = require('mongoose');




const connectDB = async () => {

    try{

        
        await mongoose.connect('mongodb+srv://admin:adm!n@cluster0.uuyqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {useNewUrlParser:true, useUnifiedTopology:true})
    
        console.log("DB Connected ...")
    }
    catch (error){
        console.log(error);
    }
}

    








// const db = mongoose.connection


module.exports = connectDB