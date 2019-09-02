var arr = [1, 4, 2, 4, 3, -1, 20];

/** 
 * sort方法排序
 */
function compare(val1,val2) {
    return val1 - val2;
}
var arr2 = arr.sort(compare)

/**
 * 冒泡排序法：相邻两元素比较，小的放前
 */
function popupSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) { 
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr3 = popupSort(arr)
console.log(arr3)