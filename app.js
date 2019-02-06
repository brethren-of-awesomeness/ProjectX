let http = require("http"); // We can move this to HTTPS if we start to work toward online multiplayer
let app = require("express")();
let express = require("express");
let fs = require("fs");
// let index = fs.readFileSync('index.html');

const port = 9001;

app.use(express.static('./'));

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
});

http.createServer(app).listen(port, ()=> {
    console.log(`Server is running at 127.0.0.1:${port}/`);
})
