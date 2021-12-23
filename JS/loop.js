let i = 0;
while(i<10){
console.log("hello world");
i++;
}

// اعداد فرد زیر 50
let x = 0;
while(x<50){
    if(x % 2 !== 0){
    console.log(x);
    }
    x++;
}

// اعداد ذوج زیر 50
let y = 0;
while(y<50){
    if(y % 2 === 0){
    console.log(y);
    }
    y++;
}

for(let q=0; q<5; q++){
console.log("1");
}

for(let z=0; z<50; z++){
    if(z % 2 === 0){
        console.log(z);
    }
}


let number= [9,10,11,12,13,14,15,16];
for(let l=0; l<number.length;l++){
    if(number[l] === 16){
        console.log("this is 16");
    }
}

let nums = [9,8,7,6,5,4,3,2,1];
for(let num of nums){
    if(num === 1){
        console.log(`${num} found!!`);
    }
}


let person ={
    name: "reza",
    family:"samadi",
    age:30
};
for(let pkey in person){
    console.log(`${pkey}: ${person[pkey]}`);
}


for (let counter = 0; counter<10;counter++){
    if(counter===7){
        break;
    }
    else if(counter === 3){
        continue;
    }
    console.log(counter);
}