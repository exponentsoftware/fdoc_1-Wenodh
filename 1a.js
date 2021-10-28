// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

const paragraph =
    'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph, ...arr) {
    let firstWordCount = 0;
    let secondWordCount = 0;
    paragraph.split(/[ .]/).forEach((element) => {
        if (element === arr[0]) {
            firstWordCount++;
        }
        if (element === arr[1]) {
            secondWordCount++;
        }
    });

    return firstWordCount > secondWordCount
        ? `The word ${arr[0]} more frequently occurred than ${arr[1]}.`
        : firstWordCount < secondWordCount
        ? `The word ${arr[1]} more frequently occurred than ${arr[0]}.`
        : firstWordCount === 0 && secondWordCount === 0
        ? 'no words present'
        : `The word ${arr[1]} and ${arr[0]} occurred equally`;
}
console.log(countWords(paragraph, 'love', 'you'));
