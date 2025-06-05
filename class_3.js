const express = require('express');
const app = express();
app.use(express.json());

app.get('/health-check', (req, res) =>{
    const kidneyid = req.query.kidneyid;
    const user = req.headers.user;
    const password = req.headers.password;

    if(user==="Ravi" && password==="8090"){
        // Do nothing
        if(kidneyid == 1 || kidneyid == 2){
            res.json({
                "msg": "Your kidney check is under process.",
            })
        }
        else{
            res.status(400).json({"msg":"You are not human"});
        }
        res.json({
            "msg": "Your kidney is healthy"
        })
    }
    else{
        res.status(400).json({"msg":"User Invalid"});
    }
});

app.listen(3003);