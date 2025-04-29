import { Router } from "express";
const authRouter=Router();//calll router package so that i can access rout methods
authRouter.post('/sign-up',(req,res)=>{
    res.send({title:"user SignUp"})

});
authRouter.post('/sign-in',(req,res)=>{
    res.send({title:"user SignIn"})

});
authRouter.post('/sign-out',(req,res)=>{
    res.send({title:"user Sign-out"})

});
export default authRouter;