const express=require("express");
const path=require("path");
const hbs=require("hbs");
const { log } = require("console");
const app=express();
const port=process.env.PORT || 5400;

const TempPath=path.join(__dirname,"../Templates/views")
const partialPath=path.join(__dirname,"../Templates/partial")
console.log(TempPath);
const staticPath=path.join(__dirname,"../public");
// console.log(staticPath);

app.use(express.static(staticPath))

app.set("view engine","hbs");
app.set("views",TempPath)
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404Error",{
        errMsg:"Opps Page Not Found"
    })
})




app.listen(port,()=>{
    console.log(port);
})