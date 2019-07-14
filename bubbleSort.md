# Telling JavaScript how to sort
- The built-in sort method accepts an optional comparator cuntion
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value

        1. if it returns a negative number, a should come before b
        2. if it returns a positive number, a should come after b,
        3. if it return 0, a and b are the same as far as the sort is concerned.

`Example:`
```js
function numberCompare(num1, num2){
    return num1 - num2;
}
console.log([6, 4, 15, 10].sort(numberCompare));

//output:
[ 4, 6, 10, 15 ]
```

- if we exchange the num1 and num2
```js
function numberCompare(num1, num2){
    return num2 - num1;
}
console.log([6, 4, 15, 10].sort(numberCompare));

//output:
[ 15, 10, 6, 4 ]
```


```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

//output:
[ 1, 2, 3, 4, 5 ]
```





```js
function compareByLen(str1, str2){
    return str1.length - str2.length;
}
console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));

//output:
[ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
```


# Bubble Sort
- A sorting algorithm where the largest values bubble up to the top!

`Before we sort, we must swap!`
- Many soring algorithms involve some type of swapping functionality


```js
//ES5
function swap(arr, idx1, indx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

# Bubble Sort Pseudocode
- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- if arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array


```js
//ES5
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            console.log(arr);
            if (arr[j] > arr[j + 1]) {
                //swap!
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([37, 45, 29, 8]);
//output:

[37, 45, 29, 8]
[37, 45, 29, 8]
[37, 29, 45, 8]
[37, 29, 8, 45]
[29, 37, 8, 45]
[29, 8, 37, 45]
[8, 29, 37, 45]







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



//output:

[37, 45, 29, 8]
[37, 45, 29, 8]
[37, 29, 45, 8]
[29, 37, 8, 45]
[37, 29, 8, 45]
[29, 8, 37, 45]
[8, 29, 37, 45]
```