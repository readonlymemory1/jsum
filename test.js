const fs  = require("fs");



    function objectCode(){
        var supuerBlock = ['<']
        const JsumType = JSON.parse(`{
            "button": {
                   
               "text":"helloworld",
               "type":"button",
               "id":"btn1",
               "class":null,
               "js":"alert('helloworld')"
                   
            }
         }`);
        const test = String(JsumType.button.type);
        switch (test) {
            case 'button':
                supuerBlock.push('button');
                

                break;
            case 'input':
                block + 'input';
                break;
            case 'h1':
                block + 'h1';
                break;
            case 'h2':
                block + 'h2';
                break;
            case 'h3':
                block + 'h3';
                break;
            case 'h4':
                block + 'h4';
                break;
            case 'h5':
                block + 'h5';
                break;
            case 'p':
                block + 'p';
                break;
            case 'span':
                block + 'span';
                break;
            case 'd':
                block + 'd';
                break;
            case 'img':
                block + 'img';
                break;
        }
        const block = supuerBlock.join('');
        return String(block);
    }
        console.log(objectCode()); 

