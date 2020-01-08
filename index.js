var arr= [4,1,2,1,2]
function singleNumber (nums) {
    var ans = 0;
    for (let num of nums) {
        ans^= num
    }
    return ans
}


var majorityElement = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    var target = Math.floor(nums / 2)
    var map = {}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]) {
            map[nums[i]]+=1
        } else {
            map[nums[i]]=1
        }
    }
    let res
    for (let key of map) {
        if (map[key] > target) {
            res = map[key]
            break
        }
    }
    return res
};

var arr2= [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    var row =0
    var column = matrix[0].length - 1
    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] === target) {
            return true
        } else if (matrix[row][column] > target) {
            column--
        } else {
            row ++
        }
    }
    return false
};
console.log(searchMatrix(arr2,5))