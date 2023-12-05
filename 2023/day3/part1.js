const calibrationInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

/*
  RETURN -> array with the rows of the input
*/
function splitInput(input) {
    const inputArr = input.split(/\n/g);
    return inputArr;
}

/*
  Extracts the numbers from all rows
  INPUT -> a row in string format
  RETURN -> an array of arrays of objects with numbers, the row number and their positions
*/
function extractNumbers(input) {
    let num;
    let positions;
    let numArr = [];
    let rowArr;
    for (let i = 0; i < input.length; i++) {
        rowArr = [];
        const row = input[i];
        for (let j = 0; j < row.length; j++) {
            num = "";
            positions = [];
            while (row[j] == "1" || row[j] == "2" || row[j] == "3" || row[j] == "4" || row[j] == "5" || row[j] == "6" || row[j] == "7" || row[j] == "8" || row[j] == "9" || row[j] == "0") {
                positions.push(j);
                num += row[j];
                j++;
            }
            if (num != "") {
                rowArr.push({
                    row: i,
                    number: num,
                    numPosition: positions
                })
            }
        }
        if (rowArr.length > 0) {
            numArr.push(rowArr);
        }
    }
    return numArr;
}

/*
  INPUT -> an array of the positions of the numbers from the between row, to check if are valid sumable numbers
  RETURN -> a boolean indicating if the number is summable 
*/
function parseAboveAndBelowRows(numObj, rows) {
    if (numObj.row == 0) {
        // Parse row below
        for (let i = 0; i < rows[numObj.row + 1].length; i++) {
            const element = rows[numObj.row + 1][i];
            if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
                for (let j = 0; j < numObj.numPosition.length; j++) {
                    const symbolPosition = numObj.numPosition[j];
                    if (symbolPosition == i || symbolPosition == numObj.numPosition[0] - 1 || symbolPosition == numObj.numPosition[numObj.numPosition.length] + 1) {
                        return true;
                    }
                }
            }
        }
        // Parse the row where the number is, in the position before the number starts
        let element = rows[numObj.row][numObj.numPosition[0] - 1]
        if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
        // Parse the row where the number is, in the position after the number starts
        element = rows[numObj.row][numObj.numPosition[numObj.numPosition.length] + 1]
        if (element != undefined && element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
    }
    if (numObj.row != 0 && (numObj.row != rows.length - 1)) {
        // Parse row below
        for (let i = 0; i < rows[numObj.row + 1].length; i++) {
            const element = rows[numObj.row + 1][i];
            if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
                for (let j = 0; j < numObj.numPosition.length; j++) {
                    const symbolPosition = numObj.numPosition[j];
                    if (symbolPosition == i || symbolPosition == numObj.numPosition[0] - 1 || symbolPosition == numObj.numPosition[numObj.numPosition.length] + 1) {
                        return true;
                    }
                }
            }
        }
        // Parse row above
        for (let i = 0; i < rows[numObj.row - 1].length; i++) {
            const element = rows[numObj.row - 1][i];
            if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
                for (let j = 0; j < numObj.numPosition.length; j++) {
                    const symbolPosition = numObj.numPosition[j];
                    if (symbolPosition == i || symbolPosition == numObj.numPosition[0] - 1 || symbolPosition == numObj.numPosition[numObj.numPosition.length] + 1) {
                        return true;
                    }
                }
            }
        }
        // Parse the row where the number is, in the position before the number starts
        let element = rows[numObj.row][numObj.numPosition[0] - 1]
        if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
        // Parse the row where the number is, in the position after the number starts
        element = rows[numObj.row][numObj.numPosition[numObj.numPosition.length] + 1]
        if (element != undefined && element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
    }
    if (numObj.row == rows.length - 1) {
        // Parse row above
        for (let i = 0; i < rows[numObj.row - 1].length; i++) {
            const element = rows[numObj.row - 1][i];
            if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
                for (let j = 0; j < numObj.numPosition.length; j++) {
                    const symbolPosition = numObj.numPosition[j];
                    if (symbolPosition == i || symbolPosition == numObj.numPosition[0] - 1 || symbolPosition == numObj.numPosition[numObj.numPosition.length] + 1) {
                        return true;
                    }
                }
            }
        }
        // Parse the row where the number is, in the position before the number starts
        let element = rows[numObj.row][numObj.numPosition[0] - 1]
        if (element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
        // Parse the row where the number is, in the position after the number starts
        element = rows[numObj.row][numObj.numPosition[numObj.numPosition.length] + 1]
        if (element != undefined && element != "." && element != "1" && element != "2" && element != "3" && element != "4" && element != "5" && element != "6" && element != "7" && element != "8" && element != "9" && element != "0") {
            return true;
        }
    }

    return false;
}

/*
  RETURN -> an array with the numbers to sum from the row
*/
function parseRows(parsedNumbers, rows) {
    let total = 0;
    for (let i = 0; i < parsedNumbers.length; i++) {
        const element = parsedNumbers[i];
        for (let j = 0; j < element.length; j++) {
            const num = element[j];
            let summable = parseAboveAndBelowRows(num, rows)
            if (summable) {
                total += Number(num.number);
            }
        }
    }
    return total;
}

/* MAIN */
const rows = splitInput(calibrationInput);
const parsedNumbers = extractNumbers(rows);
const result = parseRows(parsedNumbers, rows);

console.log(result)
