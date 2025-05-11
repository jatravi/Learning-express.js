const express = require("express");

const app = express();

app.get("/", function(req, res){
    const n = req.query.n;
    res.send(n + " tu pagal hai");
})

app.listen(3000);