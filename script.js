
//GET INPUT 

// str = prompt('insert the expression at calculation',e.g. 2+2);
str = '-1+3+-1+1+-3';
str = str.trim();

//VALIDATE INPUT AND RUN

if(isValidInput(str)) {
    console.log(calMath(str));
}

//FUNCTIONS

function isValidInput(str) {
    if(haveLetters(str)) {
        console.log("please insert just only the symbols availables");
        return false;;
    }else if(!isMathStatement(str)) {
        console.log("please insert available math statement");
        return false;
    }
    return true;
}

function haveLetters(str) {
    const regex = /[a-z]/ig;
    return str.match(regex) !== null;
}

function isMathStatement(str) {
return str.match(/[+*/-]/) !== null;
} 

//MAIN FUNCTION

function calMath(str) {

    if (str.match(/[+]/) !== null) {

        const index = str.match(/[+]/).index;
        const array = [str.slice(0,index) ,str.slice(index+1)]
        let a = array[0];
        let b = array[1];

        if(isNaN(+a)){
            a = calMath(array[0]);
        }else if(isNaN(+b)){
            b = calMath(array[1]);
        }
        
        return +a + +b;
        
    }
}

