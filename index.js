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
    this.printHead = function(){
        return head
    }
}

var l = new LinkedList()
l.append(1)
l.append(2)
console.log(l.printHead())