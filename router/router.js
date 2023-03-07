const express = require('express');
const router = express.Router();

//* http://Localhost:3000/user/get
router.get("/get", (req,res,next) =>{
  res.status(200).json({
    message: "Using GET",
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});

module.exports = router;