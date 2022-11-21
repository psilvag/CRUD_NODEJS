
const express=require('express')
const app=express()
const port=7000

const userRouter=require('./users/users.router')

app.use(express.json())
app.get('/',(req,res)=> {
    res.json({
        messague:'CONNECTED'
    })
})

app.use('/api/v1',userRouter)






app.listen(port,()=>{
    console.log(`Server connected by port:${port}`);
})