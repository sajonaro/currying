//this functions removes words from ofiginal text
//and returns text
const filterWordsFromText = function(wordsToFilterArray, originalText) {
    let words = originalText.toString().split(' ');
    wordsToFilterArray = [].concat(wordsToFilterArray).map(e => e.toLowerCase());
    wordsToFilterArray.forEach(w => {
        words = words.filter(e =>
            e.toLowerCase() !== w
        )
    });
    return words.join(" ");
}

module.exports = filterWordsFromText;