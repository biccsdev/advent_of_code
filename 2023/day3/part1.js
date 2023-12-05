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
  Extracts the numbers from a row
  INPUT -> a row in string format
  RETURN -> an array of objects with numbers and their positions
*/
function extractNumbers(input) {
    /*
            TODO: add number and its position to numArr
    */
    let num;
    let numArr;
    for (let i = 0; i < input.length; i++) {
        num = "";
        while (input[i] == "1" || input[i] == "2" || input[i] == "3" || input[i] == "4" || input[i] == "5" || input[i] == "6" || input[i] == "7" || input[i] == "8" || input[i] == "9" || input[i] == "0") {
            num += input[i];
            i++;
        }

    }
}

/*
  INPUT -> an array of the positions of the numbers from the between row, to check if are valid sumable numbers
  RETURN -> an array with the numbers available to sum to the total 
*/
function parseAboveAndBelowRows(positions) { }

/*
  RETURN -> an array with the numbers to sum from the row
*/
function parseRow() { }

/* MAIN */
//console.log(splitInput(calibrationInput))
