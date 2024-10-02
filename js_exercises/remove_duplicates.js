const ourArray = [1, 2, 4, 4, 4, 5, 6, 7, 8, 8, 9, 0];
const removeDuplicates = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const withoutDuplicates = removeDuplicates(ourArray);
console.log(`The array without duplicates: ${withoutDuplicates}`);
console.log(`Its length: newArray.length ${withoutDuplicates.length}`);


// function removeDuplicates2(nums) {
//     if (nums.length === 0) return 0;
//
//     let i = 0;  // Slow pointer
//
//     for (let j = 1; j < nums.length; j++) {  // Fast pointer
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//
//     return i + 1;
// }
//
// const noDuplicates = removeDuplicates2(ourArray);
// console.log(`The array without duplicates: ${noDuplicates}`);


// const nums = [1, 1, 2, 2, 4, 4, 4, 5, 6, 7, 8, 8, 9];
//
// console.log(`Array before: ${nums}`);
//
// const removeDuplicates = (array) => {
//     let counter = 0;
//     for (let i = 0; i < (array.length); i++) {
//         if (array[i] === array[i+1]) {
//             counter++;
//             let splised = array.splice(i, 1);
//             array.push(splised);
//         }
//     }
//     return array.length - counter;
// }
//
// const k = removeDuplicates(nums);
//
// console.log(`Array after: ${nums}; k: ${k}`);
