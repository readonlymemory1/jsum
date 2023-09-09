const fs = require('fs');

function logc(){
    fs.readFile('mainFrame.json', 'utf8', function(err, data){
        console.log('code:\n' +data );
    });

}
exports.logc = logc;