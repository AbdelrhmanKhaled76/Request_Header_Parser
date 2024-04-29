const express = require('express');
const app = express();
app.use(express.static("./public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "./public/index.html");
});

app.get('/api/:whoami',(req,res)=>{
    const {whoami} = req.params;
    if(whoami){
        res.json({ipaddress : req.ip
        ,language : req.headers['accept-language'],
        software : req.headers['user-agent']})
    }
    res.status(404).send("not found")
});

var listener = app.listen(process.env.PORT || 3000, ()=>{
    console.log("listening on port : " + listener.address().port)
});