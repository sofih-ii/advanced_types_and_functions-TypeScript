const withoutEnd = ()=>{
    while(true){
        console.log('1');
    }
}

const fail = (message: string)=>{
    throw new Error(message);
}

const example = (input: unknown)=>{
    if(typeof input === 'string'){
        return 'It is a string'
    }else if(Array.isArray(input)){
        return 'It is an Array'
    }
    return fail('Not match')
}

console.log(example('Hello'));
console.log(example([1, 2,34]));
console.log(example(12212));//Se detiene
