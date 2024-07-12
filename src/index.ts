import express from 'express';


const app = express();
const PORT = 3000;


app.get('/',(_req,res)=>{
    res.send('Hellos, fellas!');
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
});