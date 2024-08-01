// const express = require('express');
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// const path = require('path');
const app = express();
app.use(cors())
app.use(bodyParser.json())

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML files
app.get('/', (req, res) => {
    res.send("This is a server"+`<p>Welcome to server side</p>`);
});

app.get('/about', (req, res) => {
    res.send("This is aboutpage");
});

app.post('/login',(req,res) =>{
    // console.log(req)
    const {email,password}=req.body
    try{
    console.log(email,password);
    res.status(200).send({message:"GOOD"});
    }
    catch{
        console.log("error?!");
        res.send({error:"RETRY"});
    }
})
app.post('/signup',(req,res) =>{
    // console.log(req)
    const {email,password,name,phone}=req.body
    try{
    console.log(email,password,name,phone);
    res.status(200).send({message:"GOOD"});
    }
    catch{
        console.log("error?!");
        res.send({error:"RETRY"});
    }
})

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

// // Handle 404 - Keep this as a last route
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });

app.listen(5000, () => {
    console.log('Server listening at port 5000');
});
