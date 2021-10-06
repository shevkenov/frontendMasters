let teacher = 'Kyle';

var myTeacher = function() {
    console.log(teacher);
}

teacher = 'Andrew';

myTeacher();

///////////////////////////////////////////

// using var
for (var i = 1; i <= 3; i++) {
    setTimeout(function printI() {
        console.log(`i Inside the loop: ${i}`)
    },i*1000)
}

console.log(`i Outside the loop: ${i}`);

////////////////////////////////////////////
// solution for the above examples
for (var l = 1; l <= 3; l++) {
    let k = l;
    setTimeout(function printI() {
        console.log(`K Inside the loop: ${k}`)
    },l*1000)
}

// using let
for (let j = 1; j <= 3; j++) {
    //setTimeout(function printI() {
        console.log(`J Inside the loop: ${j}`)
    //},i*1000)
}

//console.log(`Outside the loop: ${j}`); // ReferenceError

////////////////////////////////////////////

