// function numberCompare(num1, num2){
//     return num1 - num2;
// }
// console.log([6, 4, 15, 10].sort(numberCompare));

// function numberCompare(num1, num2){
//     return num2 - num1;
// }
// console.log([6, 4, 15, 10].sort(numberCompare));




// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// function compareByLen(str1, str2){
//     return str1.length - str2.length;
// }
// console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));








//Bubble Sort
/*
- Many soring algorithms involve some type of swapping functionality
*/

// //ES5
// function swap(arr, idx1, indx2) {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// //ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }


// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--) {
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr);
//             if (arr[j] > arr[j + 1]) {
//                 //swap!
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// bubbleSort([37, 45, 29, 8]);


//ES6


function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            console.log(arr);
            if (arr[j] > arr[j + 1]) {
                //swap!
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
bubbleSort([37, 45, 29, 8]);
