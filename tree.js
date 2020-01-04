var arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

var searchMatrix = function(matrix, target) {
    var arr = matrix.flat()
    return arr.indexOf(target)>-1
};

  console.log(searchMatrix(arr,5))