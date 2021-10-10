// example of how dynamic scope

var teacher = 'Kyle';

function ask(question) {
    console.log(teacher, question);
}

function anotherClass() {
    var teacher = 'Suzy';

    ask("Why?")
}

anotherClass(); // it should console log "Suzy Why?", but bucause dynamic scope does not exist in JS it consle log "Kyle why?"