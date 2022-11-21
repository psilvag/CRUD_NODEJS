
 const userControllers=require('./users.controllers.js')
 
 const servGetAllUsers=(req,res)=>{
    const usersData=userControllers.getAllUsers()
    res.status(200).json(usersData)
 }

 const servPostNewUser=(req,res)=>{
    const {first_name,last_name,email,password,birthday}=req.body
    const data=userControllers.postNewUser({first_name,last_name,email,password,birthday})
    if(first_name && email && password)
    {
        res.status(201).json(data)
    }
    else {
        res.status(400).json({
            messague:"Invalid data",
            fields: {
                first_name: 'string',
	            last_name: 'string',
	            email: 'string',
	            password: 'string',
	            birthday: 'YYYY/MM/DD'
            }
        })     
    }
 }

 const servGetUserById=(req,res)=>{
    const id=req.params.id
    const data=userControllers.getUserById(id)
    if(data)
    {
    res.status(200).json(data)
    }
  else{
    res.status(404).json({
        messague:'ID NOT FOUND'
    })
  }
 }

 const servDeleteUserById=(req,res)=>{
    const id=req.params.id
    const userDeleteDB=userControllers.deleteUserById(id)
    if(userDeleteDB){
        res.status(200).json(userDeleteDB)
    }
    else{
        res.status(404).json({
            messague:"ID NOT FOUND"
        })
    }

 }
 
 const servUpdateUserById=(req,res)=>{
    const id=req.params.id
    const {first_name,last_name,email,password,birthday}=req.body
    const data=userControllers.updateUserById(id,req.body)
    if(first_name && email && password)
    {
        res.status(200).json(data)
    }
    else{
        res.status(500).json({
            messague:'INTERNAL ERROR'
        })
    }
 }

 module.exports={
    servGetAllUsers,
    servPostNewUser,
    servGetUserById,
    servDeleteUserById,
    servUpdateUserById
 }
