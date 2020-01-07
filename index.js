function getme() {
    var men = process.memoryUsage()
    var format = function (bytes) {
        return (bytes/1024/1024).toFixed(2)+"MB"
    }
    console.log('heapTotal: '+format(men.heapTotal)+)
}

var size = 20 * 1024 * 1024
var arrall = []
for (var i = 0; i < 20; i++){
    arrall.push(new Array(size));
}

