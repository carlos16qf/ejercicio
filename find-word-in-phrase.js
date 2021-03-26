function countLastWordLength(phrase) {

    const word = phrase.length;
    const word2 = phrase.lastIndexOf(' ');
    return word - word2 -1;



}
