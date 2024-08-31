const express = require("express");

const app = express();
//-------UGLY WAY FOR VALIDATION AND AUTHENTICATION-----------------
app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username === "admin" && password === "admin123")){
        res.status(400).json({
            msg : "Something up your inputs"
        })
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg : "Something up your inputs"
        })
        return;
    }
    //do something with kidney here
    res.json({
        msg : "Your kidney is fine!"
    });
    
});

app.listen(3000);