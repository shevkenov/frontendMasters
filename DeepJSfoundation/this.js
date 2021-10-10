var teacher = 'Kyle';

function ask(question) {
    console.log(this.teacher, question);
}

function anotherClass() {
    var myContext = {
        teacher: "Suzy"
    };

    ask.call(myContext,"Why?");
}

anotherClass(); // it prints out "Suzy Why?" because "this" keyword points to "Mycontext"

console.log('/////////////////////////////////////////////////////////////////////////////////////////')

var workshop1 = {
    teacher: "Kyle",
    ask
}
var workshop2 = {
    teacher: "Suzy",
    ask
}

workshop1.ask("How do I share a method?") // it prints out "Kyle Why?" because "this" keyword points to the object itself. It is called implicit binding.
workshop2.ask("How do I share a method?") // it prints out "Suzy Why?" because "this" keyword points to the object itself. It is called implicit binding.

console.log('/////////////////////////////////////////////////////////////////////////////////////////')

var workshop3 = {
    teacher: "Kyle",
}
var workshop4 = {
    teacher: "Suzy",
}

ask.call(workshop3, 'Can i explicitly set context?')
ask.call(workshop4, 'Can i explicitly set context?')

console.log('/////////////////////////////////////////////////////////////////////////////////////////')

setTimeout(workshop1.ask, 1000, "Lost this?"); // "this" is lost because during the call time "this" is undefined; 
setTimeout(workshop1.ask.bind(workshop1), 1000, "Hard bound this"); // "this" is hard bounded; 

console.log('/////////////////////////////////////////////////////////////////////////////////////////')

ask('Is it default bindings?') // exampe of undefine this

console.log('/////////////////////////////////////////////////////////////////////////////////////////')

const workshop5 = {
    teacher: "Kyle",
    ask: (question) => {
        console.log(this.teacher, question);
    }
}

workshop5.ask("undefined this") // it is undefine because in this example curly brackets does not define a scope
// solution
workshop5.ask.call(workshop5, "still not defined this."); // it is undefined because thay cannot be binded using call or apply

