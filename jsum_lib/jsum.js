/*******
 * I'm noob developer
 * 
 * WARNING: I don't know what will happen to this library.
 * 
 * version 1.0.0
 */
const fs = require('fs');
let block = '<'

fs.readFile('mainFrame.json', 'utf8', (err, data)=>{
    function objectCode(type){
        switch (type) {
            case 'button':
                block =+ 'button';
                break;
            case 'input':
                block =+ 'input';
                break;
            case 'h1':
                block =+ 'h1';
                break;
            case 'h2':
                block =+ 'h2';
                break;
            case 'h3':
                block =+ 'h3';
                break;
            case 'h4':
                block =+ 'h4';
                break;
            case 'h5':
                block =+ 'h5';
                break;
            case 'p':
                block =+ 'p';
                break;
            case 'span':
                block =+ 'span';
                break;
            case 'd':
                block =+ 'd';
                break;
            case 'img':
                block =+ 'img';
                break;
        }

    }
    exports.objectCode = objectCode;
});
