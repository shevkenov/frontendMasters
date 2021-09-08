function Just(val) {
    return {map, chain, ap, inspect}

    function map(fn) {
        return Just( fn(val) )
    }

    // aka: bind or flat
    function chain(fn) {
        return fn(val)
    }

    function ap(anotherMonad) {
        return anotherMonad.map( val );
    }

    function inspect() {
        return `Just(${ val })`
    }
}

const A = Just(10);

const B = A.map(v => v * 2);
// return the modified value with new Just monad instance
console.log(B.inspect());

const eleven = A.chain(v => v + 1);
// flatters the monad
console.log(eleven);

///////////////////////////////////////////////////////////////////////////////

const C = Just(5);

function sum(x,y) { return x + y};

function curry(fn) {
    return x => {
        return y => {
            return fn(x,y);
        }
    }
}

const D = A.map( curry(sum) );
const E = D.ap( C );
console.log(E.inspect());

// another way to achive the same result
const F = A.map( curry(sum) ).ap( B );
console.log(F.inspect())
