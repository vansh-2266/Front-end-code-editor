    let htmlCode = document.getElementById('html-code');
    let cssCode = document.getElementById('css-code');
    let jsCode = document.getElementById('js-code');
    let output = document.getElementById('output');

function run(){

    // //adding textarea value of code in iframe document code to get desired output of code in iframe
    output.contentDocument.body.innerHTML = htmlCode.value;
    output.contentDocument.head.innerHTML = "<style>"+cssCode.value+"</style>";

    // // using eval() function to inject & use javascript from text-area
     output.contentWindow.eval(jsCode.value);
    
}

//code to update iframe o/p while typing
htmlCode.addEventListener("keyup", run);
cssCode.getElementById('css-code').addEventListener("keyup", run);
jsCode.getElementById('js-code').addEventListener("keyup", run);

    

