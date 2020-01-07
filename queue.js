/**
 * 队列：一种先入先出的数据结构-JS实现（数组）
 * 操作：
 *      enQueue,deQueue,front,isEmpty,clear,size,
 */
var Queue = function () {
    var items = []
    this.enQueue = function (item) {
        items.push(item)
    }
    this.deQueue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function () {
        return items.length === 0
    }
    this.clear = function () {
        items = []
    }
}

var LinkedList = function () {
    var head = null
    var length = 0
    var CreateNode = function (val) {
        this.value = val
        this.next = null
    }
    this.append = function (val) {
        var node = new CreateNode(val)
        if (!head) {
            head = node
        } else {
            let current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.insert = function (index, value) {
        var current = head
        var node = CreateNode(value)
        if (index === 0) {
            head = node
            node.next = current
        } else {
            var _index = 0
            var previous = null
            while (_index<index) {
                previous = current
                current = current.next
                index++
            }
            previous.next = node
            node.next = current
        }
        length++
    }
    this.indexOf = function (val) {
        var current = head
        var index = 0
        while (current) {
            if (current.value === val) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
    this.removeAt = function (index) {
        if (position > -1 && position < length) {
            if (position === 0) {
                var current = head
                head = current.next
            } else {
                var current = head 
                var _index = 0
                var previous = null
                while (_index < index) {
                    previous = current
                    current = current.next
                    _index++
                }
                previous.next = current.next
            }
        }
        length--
        return current
    }
    this.remove = function (val) {
        return this.removeAt(this.indexOf(val))
    }
    this.isEmpty = function () {
        return length===0
    }
    this.getSize = function () {
        return length
    }
}