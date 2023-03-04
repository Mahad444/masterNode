const express = require("express");
const router = express.Router();
const { getUsers,createUser,getOneUser,deleteUser,updateUser} = require("./controller/user");

// Path: routes.js

router.get('/users',getUsers);
router.post('/users',createUser);
router.get('/users/:id',getOneUser);
router.delete('/users/:id',deleteUser);
router.patch('/users/:id',updateUser);


module.exports = router;