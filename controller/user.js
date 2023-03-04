const uuid = require('uuid');

let users = [];

module.exports = {
getUsers: (req,res)=>{
    res.send(users)
    res.send("Hello World");
},

createUser: (req,res)=>{
    const user = (req.body);
    users.push({...user,id:uuid.v4()});
    res.send(`${user.name} added to the database`);
},
getOneUser: (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id===id);
    res.send(foundUser);
},
deleteUser: (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!==id);
    res.send(`User with the id ${id} deleted from the database`);
},
updateUser: (req,res)=>{
    const {id} = req.params;
    const {name,age} = req.body;
    const user = users.find((user)=>user.id===id);
    if(name)user.name = name;
    if(age)user.age = age;
    res.send(`User with the id ${id} has been updated`);
}
}