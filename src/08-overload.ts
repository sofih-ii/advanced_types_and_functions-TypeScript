// sofia => [s, o, f, i, a] => string => string[]
// [s, o, f, i, a] => sofia => string[] => string

function parseStr(input: string | string[]): string | string[]{
    if(Array.isArray(input)){
        return input.join('');//string
    }else{
        return input.split('');//sttring[]
    }
}

const rtaArray = parseStr('Sofia');
//rtaArray.reverse();
if(Array.isArray(rtaArray)){
    rtaArray.reverse();
}
console.log('rtaArray', 'Sofia = >',rtaArray);


const rtaStr = parseStr(['S', 'o', 'f', 'i', 'a']);
//rtaStr.toLowerCase();
if(typeof rtaStr === 'string'){
    rtaStr.toLowerCase();
}
console.log('rtastr', "['S', 'o', 'f', 'i', 'a'] =>",rtaStr);