/**
 * 初始化模块（初始化）（模块合并，事件初始化）
 * 运动控制模块（方向控制）-给出运动算法
 * 运动执行模块（执行）-执行运动算法
 * @param {*} a 
 * @param {*} b 
 */
function extend(a, b) {
    Object.keys(b).forEach(item => {
        a[item] = b[item]
    })
}
function mover(config) {
    this.config = {}
    this.idArr = config.idArr || []
    this.domArr = []
    this.nowstate = [0,0]
    if (config.mover) {
        this.movediv = document.getElementById(config.mover)
    } else {
        throw new Error('必须给出移动块id')
    }
}

mover.prototype.init = function () {
    extend(over.__proto__,runnerControl)
}
mover.prototype.bind = function () {
    this.init()
}

var runnerControl = {
    speedControl: function () {
        
    },
    
}