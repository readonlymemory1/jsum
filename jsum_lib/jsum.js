/*******
 * I'm noob developer
 * 
 * WARNING: I don't know what will happen to this library.
 * 
 * version 1.0.0
 */
const fs = require('fs');
let supuerBlock = '<'
function objectCode(object){
    const obj = JSON.parse(object)
    switch (obj) {
        case 'button':
            supuerBlock.push('button');
            break;
        case 'input':
            supuerBlock.push('button');
            break;
        case 'h1':
            supuerBlock.push('button');
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
    const block = supuerBlock.join('');
    return String(block);
}
exports.objectCode = objectCode; 