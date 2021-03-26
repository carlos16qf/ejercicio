function replaceLastWord(phrase, word) {
    const array = phrase.split(' ');
    array.pop();
    array.push(word);
    const result = array.join(' ')
    return result;
}
