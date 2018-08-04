const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const port = process.env.PORT || 8080;
const cors = require('cors');

//initialize express server
let api = express();
//allow access from anywhere
api.use(cors());
//use json body parser
api.use(bodyParser.json());

//define routes 
router(api);

//listen to a port
api.listen(port,()=>{
  console.log("Server api on port...", port);
});

