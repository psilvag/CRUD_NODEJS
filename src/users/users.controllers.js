
//Data user object
/*{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}*/


const usersDB=[]
let id=1

const getAllUsers=()=>{
    return usersDB
}

const postNewUser=(data)=>{
    const newUser={
        id: id++,
        first_name: data.first_name,
        last_name: data.last_name?data.last_name:'undefined',
        email: data.email,
        password: data.password,
        birthday: data.birthday?data.birthday:'undefined'
    }
    usersDB.push(newUser)
    return newUser
}

const getUserById=(id)=>{
  const userId=usersDB.find(user=>user.id==id)
  return userId

}

const deleteUserById=(id)=>{
    const indexUser=usersDB.findIndex(user=>user.id==id)
    const deleteUser=usersDB.splice(indexUser,1)
    return usersDB
}

const updateUserById=(id,dataUser)=>{
   const userId=usersDB.find(user=>user.id==id)
   const indexUser=usersDB.findIndex(user=>user.id==id)  
   
   userId.first_name=dataUser.first_name
   userId.last_name=dataUser.last_name
   userId.email=dataUser.email
   userId.password=dataUser.password
   userId.birthday=dataUser.birthday

   const userUpdate={
    id: userId.id,
    first_name: userId.first_name,
    last_name: userId.last_name?userId.last_name:'undefined',
    email: userId.email,
    password: userId.password,
    birthday: userId.birthday ? userId.birthday:'undefined'
   }
   const userUpdateDB=usersDB.splice(indexUser,1,userUpdate)
   return userUpdateDB
   
}


module.exports={
    getAllUsers,
    postNewUser,
    getUserById,
    deleteUserById,
    updateUserById
}