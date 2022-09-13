import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/cafeteria';
//mongodb://localhost:27017

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
        console.log('BDD conectada');  
})