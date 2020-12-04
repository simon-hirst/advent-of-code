import fs from 'fs';

const dataBuffer = fs.readFileSync('input.txt').toString().split("\n");
const numberGoal = 2020;

dataBuffer.forEach(number => {
    const goal = numberGoal - parseInt(number, 10);
    dataBuffer.forEach(number2 => {
        const goal2 = goal - number2;
        if (dataBuffer.includes(goal2.toString())) {
            console.log(number, number2, goal2);
        }
    })
})