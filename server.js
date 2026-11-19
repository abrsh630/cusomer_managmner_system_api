const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT ||5000;
const host = process.env.HOST;
const routes = require('./custRoute');
app.use(express.json());
app.use('/customers',routes);

app.use((req,res)=>{
    res.status(404).send("the route is not found!!");
});

app.listen(port,()=>{
    console.log(`running the url  http://${host}:${port}/`);
})
