import express from "express"
import { client } from "@repo/db/client"

const app = express();

app.get('/',(req,res)=>{
    res.send('hi there')
})

app.post('/signup',async(req,res)=>{
    try {
        let {username,password} = req.body;
        const user = await client.user.create({
            data:{
                username,
                password
            }
        })
        res.json({message:"signup successful",id:user.id })
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000)