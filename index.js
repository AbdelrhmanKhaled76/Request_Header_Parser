const express = require('express');
const app = express();
app.use(express.static("./public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "./public/index.html");
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

var listener = app.listen(process.env.PORT || 3000, ()=>{
    console.log("listening on port : " + listener.address().port)
});
