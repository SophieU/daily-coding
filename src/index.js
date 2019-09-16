var p1 = new Promise(function (res, rej) {
    setTimeout(() => {
        res(11)
    }, 1000);
})
var p2 = new Promise(function (res, rej) {
    res(22)
})
var p3 = new Promise(function (res, rej) {
    setTimeout(() => {
        res(33)
    }, 2000);
})
Promise.all([p1, p2, p3]).then(res => {
})