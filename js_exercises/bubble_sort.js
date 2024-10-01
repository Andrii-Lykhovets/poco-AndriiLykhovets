// Bubble sort in Python
// def bubble_sort(arr):
//     n = len(arr)
//     for i in range(n):
//         # Last i elements are already sorted, so we skip them
//         for j in range(0, n-i-1):
//             # Swap if the element found is greater than the next element
//             if arr[j] > arr[j+1]:
//                 arr[j], arr[j+1] = arr[j+1], arr[j]

// # Example usage
// arr = [64, 34, 25, 12, 22, 11, 90]
// bubble_sort(arr)
// print("Sorted array:", arr)


// BS in JS
function myBubbleSort(arr) {
    let n = arr.length;
    // Outer loop to make passes over the array
    for (let i = 0; i < n; i++) {
        // Inner loop for comparing adjacent elements
        // Last i elements are already sorted, so we skip them
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next one, swap them
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swapping elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
myBubbleSort(arr);
console.log("Sorted array:", arr);


// Print array in one line.
function printArrayInOneLine(array, separator = ", ")
{
    // if (separator === undefined) {
    //     throw "Argument separator not set.";
    // }
    let text = "[";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i];
        if (i !== array.length - 1) {
            text = text + separator;
        }
    }
    text = text + "]"
    console.log(text);
}


function bubbleSort(input)
{
    let output = input;
    // TODO: implement bubble sort in here.
    let elNum = input.length;
    for (let i = 0; i < elNum; i++) {
        for (let j = 0; j < elNum - 1 -1; j++) {
            if (input[j] > input[j + 1]) {
                let temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }
    return output;
}


let myInput = [2, 3, 1, 5, 6]
let myOutput = bubbleSort(myInput);
printArrayInOneLine(myOutput);
printArrayInOneLine(arr);