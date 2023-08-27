import express from "express" ;
const app=express();
const port=3000;

app.get("/",(req,res) =>
{res.send("hello");
   // console.log(req.rawHeaders);
});

app.get("/about",(req,res) =>
{res.send("<h1>>about me</h1");
   // console.log(req.rawHeaders);
});

app.get("/contact",(req,res) =>
{res.send("<p>  my phone number 22522552</p>");
   // console.log(req.rawHeaders);
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})