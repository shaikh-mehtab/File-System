const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',router);



app.listen(8080,()=>{
    console.log("App running on 8080");
})