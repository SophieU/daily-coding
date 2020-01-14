/**
 * @param {number[]} nums
 * @return {number}
 */
var rotate = function (matrix) {
    
    for (let i = 1; i < matrix.length; i++){
        let count = i;
        while (count > 0) {
            count--
            let temp = matrix[count][i]
            matrix[count][i] = matrix[i][count]
            matrix[i][count] = temp
        }
    }
    let rotateCount = Math.floor(matrix.length / 2)
    for (let a = 0; a < matrix.length; a++){
        let len = matrix[a].length
        for (let i = 0; i < rotateCount; i++){
            let temp = matrix[a][i]
            matrix[a][i] = matrix[a][len - i - 1]
            matrix[a][len - i - 1] = temp
        }
    }
    console.log(matrix)
};

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
rotate(matrix)
// console.log(rotate(matrix))