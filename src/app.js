const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let n1 = Number(req.body.val1);
    let opr = req.body.val2;
    let n2 = Number(req.body.val3);
    if(opr==='+') res.send(`${n1} ${opr} ${n2} = ${n1+n2}`);
    else if(opr==='-') res.send(`${n1} ${opr} ${n2} = ${n1-n2}`);
    else if(opr==='*') res.send(`${n1} ${opr} ${n2} = ${n1*n2}`);
    else if(opr==='/') res.send(`${n1} ${opr} ${n2} = ${n1/n2}`);
    else res.send("Cannot Calculate! Please Enter the Valid Inputs!")
})

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});