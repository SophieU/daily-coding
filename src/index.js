// 数组去重
var arr = [1,2,4,3,3,45,6,1,2];

// function unique(arr){
//     return Array.from(new Set(arr))
// }

// function unique(arr){
//     return arr.filter((item,index,array)=>{
//         return array.indexOf(item)===index
//     })
// }

// 数组排序
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function quickSort(arr){
    let left = [];
    let right = [];
    if(arr.length<=1){
        return arr
    }
    let center = arr[Math.floor(arr.length/2)];
    arr.splice(arr.indexOf(center),1);
    for(let i=0;i<arr.length;i++){
        if(arr[i]<center){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([center],quickSort(right))
}

function selectSort(arr){
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        let minIndex = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[i]){
                minIndex = j;
            }
        }
        let temp = arr[i]
        arr[i]= arr[minIndex]
        arr[minIndex] = temp;
    }
    return arr;
}
var res = selectSort(arr)
console.log(res)