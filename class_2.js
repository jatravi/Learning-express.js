// const express = require("express");
// const app = express();
// app.use(express.json());

// app.listen(3002);/

// MAP
const input = [1,2,3,4,5];
const ans = input.map((i) => {
    return i*2;
})
console.log(ans);

// FILTER
const result = input.filter((i) => {
    if (i%2 == 0)
        return true;
    return false;
})
console.log(result);