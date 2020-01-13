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
function Stack() {
    var items = []
    this.push = function (item) {
        items.push(item)
    }
    this.pop = function () {
        return item.pop
    }
    this.peek = function () {
        return items[items.length-1]
    }
    this.getLength = function () {
        return items.length
    }
}
// 匹配括号
function swap(str) {
    let map = {
        '(': 1,
        ')': -1,
        '[': 2,
        ']': -2,
        '{': 3,
        '}':-3
    }
    var stack = new Stack()
    for (let i = 0; i < str.length;i++) {
        if (map[str[i]] > 0) { 
            stack.push(str[i])
        } else {
            let last = stack.pop()
            if(map[last]+map[str[i]]!==0) return false
        }
    }
    if(stack.getLength()>0) return false
    return true
}

// 去重
var arr =[-1,-100,3,99]
var removeDuplicates = function(nums) {
    let len = nums.length
    for (let i = 0; i < len;){
        if (nums.slice(0, i).indexOf(nums[i]) !== -1) {
            nums.splice(i,1)
            len--
        } else {
            i++
        }
    }
    console.log(nums)
    return nums.length
};


var rotate = function (nums, k) {
    for (let i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
    console.log(nums)
};


var intersect = function (nums1, nums2) {
  var res = []
    for (let i = 0; i < nums1.length; i++){
        let target = nums1[i]
        if (nums2.indexOf(target) === -1) {
            continue
        } else {
            res.push(...nums2.splice(nums2.indexOf(target),1))
        }
    }
    return res
};
function checkNum(num) {
    if (num < 9) {
        return num+1
    } else {
        return 0
    }
}
var plusOne = function (digits) {
    
    let len = digits.length - 1;
    for (let i = len; i >=0;){
        if (digits[i] === 9) {
            digits.splice(i, 1, checkNum(digits[i]))
            i--
        } else {
            digits.splice(i, 1, checkNum(digits[i]))
            break
        }
    }
    if (digits[0] === 0 && digits.length > 0) {
        digits.unshift(1)
    }
    return digits
};


var moveZeros = function (nums) {
    let len = nums.length
    let i = 0;
    let count = 0;
    while (count < len) {
        count++;
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0])
        } else {
            i++
        }
    }
  
    return nums
}

var twoSum = function(nums, target) {
    var map = {}
    for (let i in nums) {
        const reduce = target - nums[i]
        if (typeof map[reduce]!=='undefined') {
            return [map[reduce],i]
        } 
        map[nums[i]] = i
    }
};
var nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))

