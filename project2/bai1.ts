//Sử dụng number, string, boolean
let number1:number = 5;
let number2:number = 5;
let phrase:string = 'Result is ';
let permit:boolean = true;

const result = number1 + number2;
if(permit){
    console.log(phrase + result);
}else{
    console.log('not show result');
}