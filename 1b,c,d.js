// 1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.
// ```js
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
//     console.log(cleanText(sentence));
// `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// ```

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
    return sentence.replace(/[^\w\s.?,]/gi, '');
}
console.log(cleanText(sentence));

//1c
function countWords(sentence) {
    return sentence
        .replace(/[^\w\s]/gi, '')
        .split(' ')
        .filter((it) => it.length > 1).length;
}

console.log(countWords(sentence));

//1c
function varietyOfWords(sentence) {
    let result = new Set(sentence.replace(/[^\w\s]/gi, '').split(' '));
    return result.size;
}

console.log(varietyOfWords(sentence));
