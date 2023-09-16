const fs = require('fs');
const jsum = require('./jsum_lib/jsum.js')

function logc(){
    fs.readFile('mainFrame.json', 'utf8', function(err, data){
        console.log('link: http://localhost:3000');
        console.log('code:\n' +data);
        let btn = jsum.objectCode(data);
        console.log();
    });

}
exports.logc = logc;