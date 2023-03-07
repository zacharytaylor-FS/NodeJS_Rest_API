/** Back-end design pattern
* * Design Pattern
* Todo make 3 modules(documents)
* ? Server/Request listener/Router 
* * -server
* * -app
* * -router
*/
const http = require('http');
const app = require('./app/app');
require("dotenv").config();

http.createServer(app).listen(process.env.PORT || 3001, () =>{
  console.log(`Node.js is listening on port ${process.env.PORT}`);
})

