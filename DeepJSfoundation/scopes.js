
let teacher = 'andrey';

function foo() {
    teacher = 'ema';
    student = 'jacko';
}

let foo1 = function anotherFoo() {
    teacher = 'anyone'
}

console.log(teacher);
////////////////////////////////////////////////////
function lookupRecord(){
    try {
        var id = 'something'
    } catch (error) {
        var id = 'anything'
    }
    
    // with let the will not work
    console.log(id)
}

lookupRecord()
