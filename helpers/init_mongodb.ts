const mongoose = require('mongoose');

const ConnectionParser = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex : true
}

mongoose.connect(process.env.MONGODB_URL,{ dbName : process.env.DB_NAME},ConnectionParser)
.then(()=>{
    console.log("Mongodb connected");
})
.catch((err : any)=>{
    console.log(err.message);
})

mongoose.connection.on('Connected', ()=>{
    console.log('Mongoose Connceted to db')
})

mongoose.connection.on('error', (err: any)=>{
    console.log(err.message)
})

mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose Connection is disconnected')
})

process.on('SIGINT', async ()=>{
    await mongoose.connection.close(); 
    process.exit(0);
})