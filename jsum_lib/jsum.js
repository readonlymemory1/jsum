/*******
 * I'm noob developer
 * 
 * WARNING: I don't know what will happen to this library.
 * 
 * version 1.0.0
 */

const fs = require('fs');
let supuerBlock = '<'
function parseJson(){
    fs.readFile("parse.json", "utf-8", (err, data)=>{
        let object = [];
        let json = JSON.parse();
        for(leng = 0;leng < length(json); leng++){
            objectCode(json.object(leng));
        }
    }); 
}

function objectCode(obj){
    function parse(){
        switch (obj) {
            case 'button':
                supuerBlock.push('button');
                break;
            case 'input':
                supuerBlock.push('input');
                break;
            case 'h1':
                supuerBlock.push('h1');
                break;
            case 'h2':
                superBlock.push('h2');
                break;
            case 'h3':
                superBlock.push('h3');
                break;
            case 'h4':
                superBlock.push('h4');
                break;
            case 'h5':
                superBlock.push('h5');
                break;
            case 'p':
                superBlock.push('p');
                break;
            case 'span':
                superBlock.push('span');
                break;
            case 'd':
                superBlock.push('d');
                break;
            case 'img':
                superBlock.push('img');
                break;
        }
    }
    let block;
    for (let i = 0; i < supuerBlock.length; i++) {
        block = supuerBlock[i];
    }
    return block;
}
exports.objectCode = objectCode; 