//import line
const  http = require('http');
const fs = require('fs');

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
console.log("start server")
exports.ServerCode = ServerCode; 