// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();
const port = 5000;


app.use(bodyParser.json());

app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('server is running')
});


app.listen(port,()=>{
    console.log('server on port')
})