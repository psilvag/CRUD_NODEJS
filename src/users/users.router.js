
   const userServices=require('./users.services.js')
   const router=require('express').Router()
   
   router.get('/users',userServices.servGetAllUsers)
   router.post('/users',userServices.servPostNewUser)
   router.get('/users/:id',userServices.servGetUserById)
   router.delete('/users/:id',userServices.servDeleteUserById)
   router.patch('/users/:id',userServices.servUpdateUserById)
   module.exports=router
 
