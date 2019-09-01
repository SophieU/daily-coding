var arr = [1, 4, 2, 4, 3, -1, 20];

/** 
 * sort方法排序
 */
function compare(val1,val2) {
    return val1 - val2;
}
var arr2 = arr.sort(compare)
console.log(arr2)