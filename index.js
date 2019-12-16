function instanceOf(left, right) {
    let prototype = right.prototype;
    let = left.__proto__
    while (true) {
        if (left === null) {
            return false;
        }
        if (left === prototype) {
            return true;
        }
        let = left.__proto__
    }
}