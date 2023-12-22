const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const sendMail = require("../controllers/sendMail");

app.use(express.static(path.join(__dirname, "src")));

app.get("/",(req,res)=>{
    res.send("I am a server");
});

app.get('/mail',sendMail);

const start = async () => {
    try {
        
app.listen(port,()=>{
    console.log(`I am live on port no. ${port}`);
});
    } catch (error) {
        
    }
};

start();