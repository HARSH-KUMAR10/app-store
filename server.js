const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const fs = require('fs')


app.use(express.static('./html'));
app.use(express.static('./images'));
app.use(express.static('./html/appPage'))
app.use(express.static('./apk'))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/index.html');
});

app.get('/app',(req,res)=>{
    res.sendFile(__dirname+'/html/appPage/appPage.html');
})


app.get('/getAllAppsList',(req,res)=>{
    var apps = fs.readFileSync('./JSON/app.json');
    apps = JSON.parse(apps);
    res.send(apps);
})

app.get('/getApp',(req,res)=>{
    var toFind = req.query.name;
    var apps = fs.readFileSync('./JSON/app.json');
    apps = JSON.parse(apps);
    var sent=0;
    for(var i=0;i<apps.length;i++){
        if(apps[i].app_name==toFind){
            res.send(apps[i]);
            sent=1;
            break;
        }
    }
    if(sent==0) res.send({Response:"error"});
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});