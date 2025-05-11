const express = require("express");
const app = express();
app.use(express.json());
const users = [{
    name: "monu",
    kidneys:[{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    const monuKidney = users[0].kidneys;
    const numberOfKidneys = monuKidney.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<monuKidney.length; i++){
        if(monuKidney[i].healthy)
            numberOfHealthyKidneys += 1;
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "POST DONE!"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "PUT DONE!"
    })
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "DELETE DONE!"
    })
})

app.listen(3001);