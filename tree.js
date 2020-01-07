function BST() {
  var root = null
  var length = 0

  function Node(value) {
    this.left = null
    this.right = null
    this.value = value
  }
  function addNode(node,v) {
    if (!node) {
      length++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = addNode(node.left,v)
    } else if (node.value < v) {
      node.right = addNode(node.right,v)
    }
    return node
  }

  this.addNode = function (value) {
     root = addNode(root,value)
  }

  this.isEmpty = function () {
    return this.length === 0
  }
  this.getLength = function () {
    return this.length
  }
}