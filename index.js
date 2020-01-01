function HashTable (){
    var items = []

    // 散列函数一
    var loseloseHashCode = function (key){
        var hash = 0
        for(var i=0;i<key.length;i++){
            hash += key[i].charCodeAt()
        }
        return hash % 37; //公认规则 取余37
    }
    // 散列函数二—————为了解决Hash表的冲突问题
    var djb2HashCode = function(){

    }
    this.put = function(key,value){
        var position = loseloseHashCode(key)
        items[position] = value
    }
    this.remove = function(key){
        var position = loseloseHashCode(key)
        items[position] = undefined
    }
    this.get = function(key){
        return items[loseloseHashCode(key)]
    }
}