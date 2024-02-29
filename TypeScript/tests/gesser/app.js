"use strict";
let Name = prompt('Enter your name');
let age = parseInt(prompt('Enter your age'));
if (age >= 18) {
    alert(`Congratulations! ${Name} You are eligible to play Minecraft.`);
}
else {
    alert('You are not eligible to play Minecraft because you are under 18.');
}
