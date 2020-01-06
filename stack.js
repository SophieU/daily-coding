function Stack() {
    var items = []
    this.push = function (item) {
        items.push(item)
    }
    this.pop = function () {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length-1]
    }
    this.isEmpty = function () {
        return items.length ===0
    }
    this.size = function () {
        return items.length
    }
}

var isValid = function (s) {
    let map = {
        '(': -1,
        ')':1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}':3
    }
    let stack = []
    for (let i = 0; i < s.length; i++){
        if (map[s[i]] < 0) {
            stack.push(s[i])
        } else {
            let last = stack.pop()
            if(map[last]+ map[s[i]]!=0) return false
        }
    }
    if (stack.length > 0) return false
    return true
}