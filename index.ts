const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
const AuthRoute = require('./Routes/Auth.routes');

require('./helpers/init_mongodb')

let app = express();

const PORT = process.env.PORT;

app.use(morgan('dev'));

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

app.get('/' , async(req : any, res: any, next: any)=>{
    res.send("Hello from express");
})

//Routes of page 

// like /auth/login
// /auth/logout etc

app.use('/auth', AuthRoute)

app.use(async (req:any,res:any,next:any)=>{
    // const error : any = new Error("Not found");
    // error.status = 404;
    // now we dont use these basic code
    // we just simply use http-error lib
    next(createError.NotFound("This route does not exist"))
})

app.use((err : any,req: any,res: any,next : any)=>{
    res.status(err.status || 500)
    res.send({
        error : {
            status : err.status || 500,
            message : err.message
        }
    })
})