const express = require('express');
const router = express.Router();

//* http://Localhost:3000/user/get
router.get("/get", (req,res,next) =>{
  res.status(200).json({
    message: "Using GET",
    metadata:{
      method: req.method,
      status: req.status,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});

router.get("/get/:id", (req,res,next) =>{
  const id = req.params.id
  // const firstName = req.params.firstName
  // const username = req.params.username
  
  res.status(200).json({
    message: "Using GET by ID",
    id: id,
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});

router.post("/post", (req,res,next) =>{
res.status(201).json({
message: "Using POST",
    status: req.statusCode,
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});
router.post("/post/:id", (req,res,next) =>{
  const id = req.params.id
  
  res.status(201).json({
    message: "Using POST by ID",
    id: id,
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});
router.patch("/patch", (req,res,next) =>{
  res.status(200).json({
    message: "Using GET",
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString(),
      Content: int
    },
  });
});

router.delete("/delete/:id", (req,res,next) =>{
  const id = req.params.id
  res.status(200).json({
    message: "Using DELETE by ID",
    id:id,
    metadata:{
      method: req.method,
      hostname: req.hostname,
      Date: new Date().toDateString(),
      Timestamp: new Date().toLocaleTimeString()
    },
  });
});

module.exports = router;