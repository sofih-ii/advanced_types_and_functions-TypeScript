let anyVar: any;
let unknowVar: unknown;
unknowVar = true;
//verify of type
if(typeof unknowVar === 'string'){
    unknowVar.toUpperCase();
}

const parse = (str: string): unknown=>{
    return JSON.parse(str);
}

if(typeof unknowVar === 'boolean'){
    let isNew: boolean = unknowVar;
}
