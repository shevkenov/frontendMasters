var teacher = 'teacher';
printTeacher();

function printTeacher() {
    console.log(teacher); // teacher is undefined because there is another variable with the 
    //same name but it is called befor its assignemnt
    var teacher = 'anotherTeacher';
}

////////////////////////////////////////////////////////////////////////////

{
    example;
    let example = 'example of TDZ' // let are not hoisted
}

var example = "global variable";


