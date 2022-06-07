//participant list
let participants = [
    {
        name : "Gabdyq",
        surname : "Zhagypar",
        age : 18,
        school : "KBTU",
        contest : 2,
        accepted : true
    },
    {
        name : "Yelaman",
        surname : "Zholdahmet",
        age : 19,
        school : "KBTU",
        contest : 3,
        accepted : false
    },
    {
        name : "Alima",
        surname : "Kusmanova",
        age : 18,
        school : "KBTU",
        contest : 3,
        accepted : true
    },
    {
        name : "Alikhan",
        surname : "Gubayev",
        age : 19,
        school : "KBTU",
        contest : 3,
        accepted : true
    },
    {
        name : "Zhanel",
        surname : "Zhakhaeva",
        age : 19,
        school : "KBTU",
        contest : 3,
        accepted : false
    },
    {
        name : "Abay",
        surname : "Alenov",
        age : 18,
        school : "KBTU",
        contest : 3,
        accepted : false
    }
]

let names = ["Gabdyq", "Alikhan", "Alima", "Amanbek", "Abay", "Erdaut", "Zhanel", "Yelaman"];

//check to acceptance
for(let i = 0; i < participants.length; i++){
    for(let j = 0; j < names.length; j++){
        if(participants[i].accepted && participants[i].name === names[j]){
            console.log(`Congratulations! ${participants[i].name} accepted!`);
        }
    }
}

participants[5].accepted = true;

let cnt = 0;
for(let i = 0; i < participants.length; i++){
    for(let j = 0; j < names.length; j++){
        if(participants[i].accepted && participants[i].name === names[j]){
            console.log(`Congratulations! ${participants[i].name} accepted!`);
            cnt++;
        }
    }
}

console.log(`Accepted participants are ${cnt}`);

//check is participant over 19 year
function isHeOver19({age}){
    return age >= 19;
}

for(let i = 0; i < participants.length; i++){
    if(isHeOver19(participants[i])){
        console.log(`${participants[i].name} is over 19y`)
    }
}

//average year of participants
const avgYear = () => {
    let ans = 0;
    for(let i = 0; i < participants.length; i++){
        ans+=participants[i].age
    }
    return ans / participants.length;
}

function marker(stud){
    console.log(`${stud} not accepted to nFactorial Incubator`)
}

notAcc = ["Zhanel", "Yelaman", "Nurdaulet", "Madina", "Martin"];
let nAccStud = notAcc.map((stud) => marker(stud));


const rejected = ["Zdravstvuite", ...notAcc, "k sozhaleniu vy ne proshli otbor na nFactorial Incubator 2022"];
console.log(rejected);

import {mentors} from './export.mjs';
console.log(mentors);

import study from "./dftexport.mjs";
console.log(study("Beknur", "Gabdyq"));











