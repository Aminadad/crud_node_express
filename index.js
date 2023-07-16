const express = require('express');
const app = express();

let port = process.env.PORT || 9090

app.get("/",(req, res)=>{
    res.send("Welcome");
})

app.listen(port, function(){
    console.log(`listening on http://127.0.0.1:${port}`);
});

