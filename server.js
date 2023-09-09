//import line
const  http = require('http');
const fs = require('fs');
const parse = require('./parse.js');

function ServerCode(){
    //Server Code
    const server = http.createServer((req, res)=>{
        fs.readFile('mainFrame.json', 'utf8', function(err, json){
            res.writeHead(200);
            res.end(json);    
        });
        
        
        
    });
    server.listen(3000);
}

exports.ServerCode = ServerCode;