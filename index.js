// import json-server in to index.js file

const jsonServer = require('json-server')

// create a server for json file

const mediaPlayerServer = jsonServer.create()

// set up path for json file

const router = jsonServer.router('db.json')

// return a middleware used by json server

const middlewares = jsonServer.defaults()

// set up port for running server

const port = 4000 || process.env.port   //incase port 4000 didnt works 

// use middleware and router in server

mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

// to listen server for resolve request from server

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listening at ${port},and waiting for client request!!`);
})

