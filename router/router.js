const express = require("express");
const router = express.Router();

//* http://Localhost:3000/users/get
router.get("/get", (req,res) =>{
  res.status(200).json({
    message: "Using GET",
    metadata:{
      hostname: res.hostname,
      method: res.method,
      date: new Date()
    }
  })
})

module.exports = router;