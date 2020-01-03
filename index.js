
var LinkedList = function(){
    // 链表头
    var head = null
    // 链表长度 
    var length = 0
    // 辅助类
    var Node = function(elem){
        this.elem = elem
        this.next = null
    }
    // 添加元素
    this.append = function(el){
        var node = new Node(el)
        if(head===null){
            head = node 
        }else{
            var current= head;
            while(current.next){
                current = current.next
            }
            current.next=node
        }
        length ++;
    }
    // 插入
    this.insert = function(position,element){
        var current = head
        var node = new Node(element)
        if(position===0){
            head = element
            head.next = current
        }else{
            var index = 0
            var previous= null
            while(index<position){
                previous = current
                current = current.next
                index++
            }
            previous.next = node
            node.next = current
        }
        length ++
    }
    // 删除
    this.removeAt = function(position){
        if(position>-1&&position<length){
            // 删除首位
            if(position===0){
                var current = head
                head = current.next
            }else{
                // 删除其他位置
                var previous = null
                var current = head
                var index = 0
                while(index<position){
                    previous=current
                    current = current.next
                    index++
                }
                // 跳出循环时，index === position
                previous.next = current.next
            }
        }
        length --;
        return current
    }
    // 获取元素位置
    this.indexOf = function (ele){
        var index =0 
        var current = head
        while(current){
            if(ele === current.elem){
                return index
            }
            index ++ 
            current = current.next
        }
        return -1
    }
    this.remove = function(elem){
        return this.removeAt(this.indexOf(elem))
    }
    this.isEmpty = function(){
        return length ===0 
    }
    this.size = function(){
        return length
    }
    this.getHead = function(){
        return head
    }
}

function HashTable_L(){
    var table = []
    // 散列函数一
    var loseloseHashCode = function (key){
        var hash = 0
        for(var i=0;i<key.length;i++){
            hash += key[i].charCodeAt()
        }
        return hash % 37; //公认规则 取余37
    }
    // 辅助类
    var Node = function(key,value){
        this.key = key
        this.value = value
    }
    this.put = function(key,value){
        var position = loseloseHashCode(key)
        if(!table[position]){
            var l = new LinkedList
            table[position] = l
        }
        table[position].append(new Node(key,value))

    }
    // 获取值 
    this.get = function(){
        var position = loseloseHashCode(key)
        if(table[position]){
            var current = table[position].getHead()
            while(current){
                if(current.elem.key == key){
                    return current.elem.value
                }
                current = current.next
            }
        }else{
            return undefined
        }
    }
    // 删除值 
    this.remove = function (){
        var position = loseloseHashCode(key)
        if(table[position]){
            var current =  table[position].getHead()
            while(current){
               if(current.elem.key===key){
                   table[position].remove(current.element)
                   if(table[position].isEmpty()){
                       table[position]=undefined; //内存空间设置为原始值，减少性能开销
                   }
                   return true
               } 
               current = current.next
            }
        }else{
            return false
        }
    }
}

var hashTable= new HashTable_L()
hashTable.put('Donnie','123321@qq.com')
hashTable.put('Ana','23243@qq.com')
hashTable.get()[13].printHead()