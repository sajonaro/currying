const _ = require('lodash');
const filterWordsFunction = require('./originalFunction.js');
const curriedVersion = _.curry(filterWordsFunction);

const text = [
    "Con este tango que es burlón y compadrito",
    "se ató dos alas la ambición de mi suburbio"
];

const wordsToFilterOut = ["la", "de", "mi", "y", "que", "es", "con"];

//curriedVersion(wordsToFilterOut) returns fn: (e) => fn(wordsToFilterOut)(e)
let output = text.map(curriedVersion(wordsToFilterOut));

//above is equivalent to:
//let output = text.map(e => filterWordsFunction(wordsToFilterOut, e));

console.log(output);