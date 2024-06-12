// sofia => [s, o, f, i, a] => string => string[]
// [s, o, f, i, a] => sofia => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown{
    if(Array.isArray(input)){
        return input.join('');//string
    }else if(typeof input === 'string'){
        return input.split('');//sttring[]
    }else if(typeof input === 'number'){
        return true // boolean
    }
}
const rtaArray = parseStr('Sofia');
rtaArray.reverse();
console.log('rtaArray', 'Sofia = >',rtaArray);

const rtaStr = parseStr(['S', 'o', 'f', 'i', 'a']);
rtaStr.toLowerCase();
console.log('rtastr', "['S', 'o', 'f', 'i', 'a'] =>",rtaStr);

const rtaBoolean = parseStr(12);
console.log('rtastr', "12 =>",rtaBoolean);