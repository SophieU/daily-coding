/**
 * 二叉搜索树： 左侧节点比节点小，右侧比节点大
 * 核心： 节点（Node）
 * 
 */
    var insertNode = function(node,newNode){
        if(newNode.value>node.value){
            if(node.right!==null){
                insertNode(node,newNode)
            }else{
                node.right = newNode.value
            }
        }else if(newNode.value<node.value){
            if(node.left!==null){
                insertNode(node.left,newNode)
            }else{
                node.left = newNode
            }
        }
    }
 function Tree(){
     function Node(value){
        this.value = value;
        this.left = null
        this.right = null
     }
     var root = null

     this.insert = function(value){
         var newNode = new Node(value)
         if(root==null){
             root = newNode
         }else{
            insertNode(root,newNode)
         }
     }
     this.remove = function(){}
     this.search = function(){}
     this.travers = function(){}


 }