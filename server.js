const express = require('express');
const app = express(); //app is the API, value is an import of express package/ an instance of express to serve the APIs endpoints
//app.use(express.json());
const bodyParser = require('body-parser'); //body parser helper
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const fs = require('fs');   //built in file system helper library

const routes = require('./routes/routes.js')(app, fs);  //loading the routing file

const PORT = process.env.PORT || 3000;

app.listen(
    PORT, 
    () =>  console.log(`API server running on port ${PORT}`)
);





//https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files