/* 
let money = 500;
let honey = 'hater moyla';
let monkey = false;
*/

let money:number = 54;
let honey: string = 'poo poo';
let funny: boolean = true;
console.log(honey);


/* 
function add(first:number, second:number): number{
    const result = first + second;
    return result;
}

const output:number = add(34, 78);
*/

// multi purpose
function add(first:number | string, second:number | string): number | string{
    const result: number | string = first + second;
    return result;
}

const output:number = add(34, 78);
const fullName = add('Adam', 'Sandler');