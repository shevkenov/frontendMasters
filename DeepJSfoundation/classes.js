class Wrokshop {
    constructor(teacher){
        this.teacher = teacher
        this.askArrowFoo = question => {
            console.log(this.teacher, question)
        }
    }

    ask(question){
        console.log(this.teacher, question)
    }
}

class AnotherWorkshop extends Wrokshop {

    ask(question){
        super.ask(question);
    }
}

const kyleWorkshop = new Wrokshop('Kyle');
kyleWorkshop.ask('Is this instance of workshop?');

const suzyWorkshop = new Wrokshop("Suzy");
suzyWorkshop.ask('Is this another instance?')

const kyleAnotherWorkshop = new AnotherWorkshop("Kyle");
kyleAnotherWorkshop.ask('Is this extended class?')

//////////////////////////////////////////////////////////////
setTimeout(kyleWorkshop.ask, 1000, 'Is it auto bound?') // it prints out an undefined, since there is no this
setTimeout(kyleWorkshop.askArrowFoo, 1000, 'Is it auto bound?') // it prints Kyle, since it is arrow function and "this" points lexicaly to its parrent function or scope
setTimeout(kyleWorkshop.ask.bind(kyleWorkshop), 1000, 'Is it hard bound?') // it prints Kyle, since it is arrow function and "this" points lexicaly to its parrent function or scope
 
