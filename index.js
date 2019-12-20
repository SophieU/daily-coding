var arr = [3, 4, 15,80,7, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 13
       
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var res = bubbleSort(arr)
console.log(res)