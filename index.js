var arr = [3, 4, 15, 80, 7, 2, 6, 5, 8, 9, 10, 16, 13];
/** 
 * 冒泡排序
 * 1. 外层循环控制总次数
 */
function bubbleSort(arr) {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++){
        for (let j = 0; j < len - 1-i; j++){
            if (arr[i] > arr[j + 1]) {
                let temp = arr[i];
                arr[j + 1] = arr[i];
                
            }
        }
    }
}