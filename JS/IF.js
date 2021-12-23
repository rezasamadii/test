let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;

let num1 = 5;
let num2 = 3;
let num3 = "3";


result1= num1 > num2;
console.log(result1);


result2= num1 < num2;
console.log(result2);


result3= num1 >= num2;
console.log(result3);


result4= num1 <= num2;
console.log(result4);

//بصورت اتوماتیک دیتا تایپ باهم یکی میکنه (رشته و نامبر یکی شدن)
result5= num3 == num2;
console.log(result5);

// به نوع دیتا تایپ حساسیت دارد
result6= num3 === num2;
console.log(result6);

// باهم برابر نباشند دیتا تایپ یکی میشود (نامبر و رشته)
result7= num3 != num2;
console.log(result7);

// باهم برابر نباشند دیتا تایپ مهم است
result8= num3 !== num2;
console.log(result8);

//حالت شرطی
let number = "Opencode";

if( number >1){
    console.log("over one");
}
else if (number===1){
    console.log("number is one");
}
else if (number<1){
    console.log("number is under one");
}
else if (number.toLocaleLowerCase() ==="opencode"){
    console.log("opencode");
}
else{
    console.log("undefinde");
}

//حالت شرطی 2
let isrich = true;
let iskind = false;

if(isrich || iskind){
console.log("is ok");
}
else{
    console.log("this fuck");
}

//حالت سوویچ
let x=4;
switch(x){
    case 1:
        console.log("1 is ok");
        break;
    case 2:
        console.log("2 is ok");
        break;
    case 3:
        console.log("3 is ok");
        break;
    case 4:
        console.log("4 is ok");
        break;        
    default:
        console.log("enter number 1 to 4");
}

