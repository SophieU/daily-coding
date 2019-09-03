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

/**
 * 选择排序法：
 */
function selectSort(arr) {
    let minIndex;
    let len = arr.length;
    let temp;
    for (let i = 0; i < len; i++){
        minIndex = i;
        for (let j = 0; j < len; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var arr4 = selectSort(arr)
console.log(arr4)