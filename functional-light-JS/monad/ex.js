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
console.log(eleven)

