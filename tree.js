/**
 * 根节点 root
 * 插入 insert
 * 查找 search
 * 遍历 traverse
 * 删除 remove
 * 内部的Node类
 * 
 */
function Tree(){
    var Node = function (value){
        this.value = value
        this.left = null
        this.right = null
    }
    var root = null
    // 插入
    function insert(node,newNode){
        if(node.value<newNode.value){
            if(node.right===null){
                node.right = newNode
            }else{
                insert(node.right,newNode)
            }
        }else{
            if(node.left===null){
                node.left = newNode
            }else{
                insert(node.left,newNode)
            }
        }
    }
    this.insert = function(value){
        var node = new Node(value)
        if(!root){
            root = node
        }else{
            insert(root,node)
        }
    }
    // 搜索
    var searchNode = function(node,value){
        if(node===null) return null
        if(value<node.value) return searchNode(node.left,value)
        else if(value>node.value) return  searchNode(node.right,value)
        else return node
    }
    this.search = function(val){
        searchNode(root,value)
    }
    // 遍历
    function traverse (node,callback){
        if(!node) return;
        //  callback(node.value) //前序遍历 —— 访问根节点的操作发生在遍历其左右子树之前。
        traverse(node.left,callback)
        // callback(node.value) //中序遍历 —— 访问根节点的操作发生在遍历其左右子树之间。
        traverse(node.right,callback)
        callback(node.value) //后序遍历 —— 访问根节点的操作发生在遍历其左右子树之后
    }
    this.traverse = function(callback){
        traverse(root,callback)
    }
    // 最小值
    this.min = function(node){
        if(node===null) return null;
        while(node&&node.left!==null){
            node = node.left
        }
        return node
    }
    // 最大值
    this.max = function(node){
        if(node===null) return null
        while(node&&node.right!==null){
            node = node.right
        }
        return node
    }
    // 删除——重新构建树
    function findMinNode(node){
        if(node === null) return null
        while(node && node.left!== null){
            node = node.left
        }
        return node
    }
    let removeNode = function (node, key) {
        if (node === null) return null;
        
        // 
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            // 第一种情况：一个叶子节点（没有子节点）
            if (node.left === null && node.right === null) {
                node = null;
                return null;
            }
            // 第二种情况：只包含一个子节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.node === null) {
                node = node.left;
                return node;
            }
    
            // 第三种情况：有两个子节点
            let aux = findMinNode(node);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
    this.remove = function(key){
        removeNode(root,key)
    }
    this.getTree = function(){
        return root
    }
}
var t = new Tree

t.insert(8)
t.insert(2)
t.insert(3)
t.insert(9)
t.remove(2)
console.log(t.getTree())