//import line
const  http = require('http');
const fs = require('fs');
const jsum = require('./jsum_lib/jsum.js');

function ServerCode(show){
    //Server Code
    const server = http.createServer((req, res)=>{
        fs.readFile('mainFrame.json', 'utf8', function(err, json){
            res.writeHead(200);
            res.end(show);    
        });
        
        
        
    });
    server.listen(3000);
}

exports.ServerCode = ServerCode;