
const jwt = require( "jsonwebtoken")
const express = require("express");


const env = require("dotenv")
env.config()


const verifyUserToken = () => {
    
    let res = express.response
    let next = express.next
    let req = express.request

    let token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
      return res.status(401).send({ auth: false, message: "No token provided." });
    }
  
    try {
      token = token.toString();
    } catch (err) {
      return res.status(401).send({ auth: false, message: "Invalid token" });
    }
  
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, err, message: "Failed to authenticate token." });
      }
      // if everything good, save to request for use in other routes
      req.body["user_id"] = decoded["user_id"];
      next();
    });
  };
  module.exports = verifyUserToken
  