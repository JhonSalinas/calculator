
//GET INPUT 

// str = prompt('insert the expression at calculation',e.g. 2+2);
str = '1.1*1.1+1+2+3-9';
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

    console.log(str);

    if (str.match(/[+]/) !== null) {

        // let index = str.match(/[+]/).index;
        let index = str.lastIndexOf('+');
        let array = [str.slice(0,index) ,str.slice(index+1)]
        let a = array[0];
        console.log(`a in array is: ${a}`);
        let b = array[1];
        console.log(`b in array is: ${b}`);
        
        if(isNaN(+a)){
            console.log(`a plus is: ${a}`)
            a = calMath(array[0]);
            console.log(`a plus is: ${a}`)
        }
        
        if(isNaN(+b)){
            console.log(`b plus is: ${b}`)
            b = calMath(array[1]);
            console.log(`b plus is: ${b}`)
        }
        
        return +a + +b;
        
    } else if(str.match(/[-]/) !== null) {
        
        // let index = str.match(/[-]/).index;
        let index = str.lastIndexOf('-');
        let array = [str.slice(0,index) ,str.slice(index+1)]
        let a = array[0];
        console.log(`a in array is: ${a}`);
        let b = array[1];
        console.log(`b in array is: ${b}`);
        
        if(isNaN(+a)){
            console.log(`a minus is: ${a}`)
            a = calMath(array[0]);
            console.log(`a minus is: ${a}`)
        }
        if(isNaN(+b)){
            console.log(`b minus is: ${b}`)
            b = calMath(array[1]);
            console.log(`b minus is: ${b}`)
        }
        
        return +a - +b;

    } else if(str.match(/[*]/) !== null) {
        
        // let index = str.match(/[-]/).index;
        let index = str.lastIndexOf('*');
        let array = [str.slice(0,index) ,str.slice(index+1)]
        let a = array[0];
        console.log(`a in array is: ${a}`);
        let b = array[1];
        console.log(`b in array is: ${b}`);
        
        if(isNaN(+a)){
            console.log(`a product is: ${a}`)
            a = calMath(array[0]);
            console.log(`a product is: ${a}`)
        }
        if(isNaN(+b)){
            console.log(`b product is: ${b}`)
            b = calMath(array[1]);
            console.log(`b product is: ${b}`)
        }
        
        return +a * +b;

    }else if(str.match(/[/]/) !== null) {
        
        // let index = str.match(/[-]/).index;
        let index = str.lastIndexOf('/');
        let array = [str.slice(0,index) ,str.slice(index+1)]
        let a = array[0];
        console.log(`a in array is: ${a}`);
        let b = array[1];
        console.log(`b in array is: ${b}`);
        
        if(isNaN(+a)){
            console.log(`a divide is: ${a}`)
            a = calMath(array[0]);
            console.log(`a divide is: ${a}`)
        }
        if(isNaN(+b)){
            console.log(`b divide is: ${b}`)
            b = calMath(array[1]);
            console.log(`b divide is: ${b}`)
        }
        
        return +a / +b;

    }
}

