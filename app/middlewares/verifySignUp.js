const { user } = require("../models");
const db = require("../models");
const User = require("../models/user.model");
const ROLES = db.ROLES;
const USER = db.user;

//check if user is already registerd by Email or Name
checkDuplicateUsernameOrEmail =(req,res,next)=>{
//find user name

User.findOne({
    username:req.body.username
}).exec((err,user)=>{
    if(err){
        res.status(500).send({message:err});
        return;
    }

    if(user){
        res.status(400).send({message : `Usernamed ${req.body.username} is already exists`});
        return;
    }

    //find by email

User.findOne({
    email:req.body.email
}).exec((err,user)=>{
  if(err){
    res.status(500).send({message:err});
    return;
  }

  if(user){
    res.status(400).send({message : `Email ${req.body.email} is already exists`});
    return;
  }

  next();
});

});


};



checkRolesExisted = (req, res, next) => {
    console.log(`DB ROLES ${ROLES}`);
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: `Failed! Role ${req.body.roles[i]} does not exist!`
          });
          return;
        }
      }
    }
  
    next();
  };
  

  const verifySignUp={
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
  };

  module.exports = verifySignUp;