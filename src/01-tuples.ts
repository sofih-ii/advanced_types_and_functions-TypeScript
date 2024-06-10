const prices: (number | string)[] = [1, 23, 5, 4, 'as'];
prices.push(1);

let user:[string, number];
user = ['sofiah-ii', 18];
//user = []
//user = ['holi'];
//user = ['diego',12, 13];
const [username, age] = user; //destructurar una tupla
console.log(username);
console.log(age);