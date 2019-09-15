var obj = {
    name: 'lala',
    age:10
}
var test = new Proxy(obj, {
    set: function (obj, prop, val) {
        console.log(prop, "is changed to", val)
        obj[prop] = val;
    }
})
test.age = 11;