// grab DOM elements

// set event listeners
// get info from user input
// use user input to update state
// update DOM to reflect the new state

let x = 3;

if (x === 5) {
    console.log('5 time');
}

function add(x, y) {
    return x + y;
}

try {
    add(5, x);
}
catch (err) {
    console.log(err);
}

const cats = [];

for (let cat in cats) {
    console.log(cat);
}
