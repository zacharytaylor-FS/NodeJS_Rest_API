const express = require('express');
const router = require('../router/router');
const app = express();

// Use middleware 
app.use(express.json()); // request.body.key:value
app.use(express.urlencoded({extended: true})) // ? Return query string(s)

/** 
 * ? What is middleware
 * - the 'technological' foundation for modern cloud-native architectures.
 * - can apply to a WIDE range of software components
 * * Middleware can include application runtimes, enterprise application 
 * * integration and various kinds of cloud services. 
 * * Data management, application services, messaging, authentication, 
 * * and application programming interface (API) management are all commonly handled by middleware.
 
 */

//* Use middleware for CORS
app.use((req,res,next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header","Origin, X-requested-With,Content-Type,Accept, Authorization");

  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH ,DELETE");
  }
  next();
})

//default actuator - http://Localehost:3001
app.get("/", (req,res,next)=>{
  res.status(200).json({message:'Service is up '})
});

// http://Localhost:3001/user/
app.use('/user', router)


module.exports = app