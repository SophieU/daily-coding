var arr = [5,2,3,1,6,9,7,8]
function bubble(arr) {
    if (!arr.length) return arr
    for (let i = arr.length-1; i>0; i--){
        for (let j = 0; j < i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}