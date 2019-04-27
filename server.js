const express=require('express');
const path=require('path');
const app = express();
const port = process.env.PORT || 4600;

app.use(express.static(path.join(__dirname,'dist/meanproject')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/meanproject/index.html'))
});

app.listen(port,(req,res)=>{
    console.log('running');
});