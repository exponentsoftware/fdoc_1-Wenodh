// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
// > It may be useful to know that you can find the length of a string by writing .length after it.

function triangle(number, symbol) {
    let test = symbol;
    for (let i = 0; i < number; i++) {
        console.log(test, test.length);
        test += symbol;
    }
    return;
}
triangle(7, '#');

// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]
// ```

function sevenRandomNumbers() {
    let arr = [];
    while (arr.length < 7) {
        let num = Math.floor(Math.random() * 10);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}
console.log(sevenRandomNumbers());

// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.
// ```js
// console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"]
// ```

function reverseArray(arr) {
    let newArr = arr;
    for (let i = 0; i < arr.length / 2; i++) {
        [newArr[i], newArr[arr.length - i - 1]] = [
            newArr[arr.length - i - 1],
            newArr[i],
        ];
    }
    return arr;
}
console.log(reverseArray(['A', 'B', 'C', 'd', 'e']));

// 2.d. Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```
let input = [1, 4, 6, 2, 5];
function checkUniqueness(arr) {
    return arr.length === new Set(arr).size;
}
console.log(checkUniqueness(input));
