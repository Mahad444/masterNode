const express= require("express");
const app = express();
const bodyParser = require ("body-parser");
const router = require("./routes");


app.use(bodyParser.json());
app.use(router);


app.listen(7000,()=>{
    console.log("app listening to http://localhost:7000")});