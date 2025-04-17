const express = require ("express")
const app = express();


app.get('/api/user',(req,res)=>{
    res.send("this is from server side");

});
app.listen(3000,()=> {
    console.log("server is running on port 3000");
});