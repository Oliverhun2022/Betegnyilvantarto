const express=require("express");
const connection=require("../connection");
const router=express.Router();
const jwt=require("jsonwebtoken");
const nodemailer=require("nodemailer");
require("dotenv").config();

router.post("/bejelentkezes",(req,res)=>{
    let felhasznalo=req.body;
    query="select email,password,role,status from user where email=?"
    connection.query(query,[felhasznalo.email],(err,results)=>{
        if(!err){
            if(results.length<=0){
                query="insert into user(name,contactnumber,email,password,status,role) values(?,?,?,?,'false','user')"
                connection.query(query,[felhasznalo.nev,felhasznalo.contactnumber,felhasznalo.email],(err,results)=>{
                    if(!err){
                        return res.status(200).json({
                            "message":"Sikerült a regisztráció"
                        })
                        else{
                            return res.status(500).json(err)
                        }
                    }
                });
            }
            else{
                return res.status(400).json({"message":"Az email már létezik!"})
            }
    }
    else{
        return res.status(500).json(err);
    }
    })
})
router.post("/login",(req,res)=>{
    const felhasznalo=req.body;
    query="select email,password,role,status,from user where email=?"
    connection.query(query,[user.email],(err,results)=>{
        if(!err){
            if(results.length<0 ||reuslts[0].password!=felhasznalo.password){
                return res.status(400).json({"message":"A felhasználónév vagy a jelszó rossz!"})
            }
            else if(results[0].status==='false'){
                return res.status(401).json({message:"Várj az adminra!"})
            }
            else if(results[0].password=felhasznalo.password){
                const response={email:results[0].email, role:results[0].role}
                const access=jwt.sign(response,process.env.ACCESS_TOKEN,{expiresIn:'8h'});
                res.status(200).json(200).json({token:access});

            }
            else{
                return res.status(400).json({"message":"Valami hiba történt!"})
            }
        }
    })
})

var nodemailer=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

router.post("/forgotPassword", (req, res) => {
    const user = req.body;
    let query = "select email, password from user where email=?";
    connection.query(query, [user.email], (err, results) => {
      if (!err) {
        if (results.length <= 0) {
          return res.status(200).json({
            message: "Password sent to your email",
          });
        } else {
          let mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Password retrieval by Cafe Management system",
            html:
              "<p>Your login details for the Cafe Management System <br> Email: " +
              results[0].email +
              "<br> Password: " +
              results[0].password +
              "<br> <a href='http://localhost:8088'>Click Here to Login</a>" +
              "</p>",
          };
  
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(info.response);
              console.log(" \n Email sent");
              return res.status(200).json({
                message: "Password sent to your email",
              });
            }
          });
        }
      } else {
        return res.status(500).json({ err });
      }
    });
  });
  
  router.get("/get", auth.authenticate, role.checkRole, (req, res) => {
    let query = 'select id,name,email,phone,status from user where role="user"';
  
    connection.query(query, (err, results) => {
      if (!err) {
        return res.status(200).json({ data: results });
      } else {
        return res.status(500).json({ err });
      }
    });
  });
  
  router.patch("/update", auth.authenticate, role.checkRole, (req, res) => {
    let user = req.body;
    let query = "update user set status=? where id=?";
    connection.query(query, [user.status, user.id], (err, results) => {
      if (!err) {
        if (results.affectedRows == 0) {
          return res.status(404).json({ message: "User ID does not exist" });
        }
        return res.status(200).json({ message: " User updated successfully" });
      } else {
        return res.status(500).json({ err });
      }
    });
  });
  
  router.get("/checkToken", auth.authenticate, (req, res) => {
    return res.status(200).json({ message: "true" });
  });
  
  router.post("/changePassword", auth.authenticate, (req, res) => {
    const user = req.body;
    const email = res.locals.email;
    let query = "select * from user where email=? and password=?";
    connection.query(query, [email, user.oldPassword], (err, results) => {
      if (!err) {
        if (results.length <= 0) {
          return res.status(400).json({ message: "Incorrect password" });
        } else if (results[0].password === user.oldPassword) {
          let query = "update user set password=? where email=?";
          connection.query(query, [user.newPassword, email], (err, results) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "Password updated successfully" });
            } else {
              return res.status(500).json({ err });
            }
          });
        } else {
          return res
            .status(400)
            .json({ message: "Something went wrong!! Please try again" });
        }
      } else {
        return res.status(500).json({ err });
      }
    });
  });
  
  module.exports = router;


})








mosule.exports=router;


























module.exports=route;