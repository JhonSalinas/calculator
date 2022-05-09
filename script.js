// str = prompt('insert the expression at calculation',e.g. 2+2);
str = '5+1+2+3+69+4';
str = str.trim();

// console.log(str.match(/[+]/) !== 'null');

// console.log(str.match(/[/*]/));

function isMathDeclaration(str) {
return str.match(/[+*/-]/) !== null;
} 

function calMath(str) {

    if (str.match(/[+]/) !== null) {
        console.log(str);
        const index = str.match(/[+]/).index;
        console.log(index.index);
        const array = [str.slice(0,index) ,str.slice(index+1)]
        console.log(array);
        let a = array[0];
        console.log(a);
        let b = array[1];
        console.log(b);
        

        if (isMathDeclaration(a)) {
            a = calMath(array[0]);
        } else if(isMathDeclaration(b)){
            b = calMath(array[1]);
        }

        return +a + +b;

    }
}

console.log(calMath(str))



