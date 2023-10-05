const express = require("express");


const app = express();

app.use("/",(req, res)=>{
    res.status(200).send("server is running")
})


const PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port http://localhost:${PORT}/`);
})