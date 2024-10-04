// let baseNum = 7;

// for (let multiNum = 1; multiNum <= 10; multiNum++) {
//     let operationResult = multiNum * baseNum;
//     console.log(`${baseNum} x ${multiNum} = ${operationResult}`);
// }

// let baseNum = 8;

// for (let multiNum = 1; multiNum <= 10; multiNum++) {
//     let operationResult = multiNum * baseNum;
//     console.log(`${baseNum} x ${multiNum} = ${operationResult}`);
// }


for (let factor1 = 1; factor1 <= 10; factor1++) {
    let row = '';
    for (let factor2 = 1; factor2 <= 10; factor2++) {
        row += (factor1 * factor2) + ' ';
    }
    console.log(row.trim())
}
