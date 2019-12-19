var arr = [3, 4, 15, 80, 7, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 13

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function quickSort(arr) {
    if(arr.length<=1){return arr}
    let target = arr[Math.floor(arr.length / 2)];
    arr.splice(arr.indexOf(target), 1);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < target) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([target],quickSort(right))
}

function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for (let j = i+1; j < arr.length ; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var res = selectSort(arr)
console.log(res)