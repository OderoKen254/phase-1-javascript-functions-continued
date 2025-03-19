// code your solution here

const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));



const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
console.log(mondayWork('work from home'));



function wrapAdjective(flair = "*"){
    return function(adjective ="special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


const encouragingPromptFunction = wrapAdjective("!!!");

console.log(encouragingPromptFunction("beautiful"));
console.log(encouragingPromptFunction());


let result = wrapAdjective('*');
console.log(result());

let emphatic = result("a hard worker");
console.log(emphatic());
