class Node {
  constructor(value) {
    this.value = value
    this.left=null
    this.right = null
  }
}
class BST{
  constructor() {
    this.root = null
    this.size=0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size===0
  }
  addNode(v) {
    this.root = this._addChild(this.root,v)
  }
  _addChild(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addChild(node.left,v)
    } else if (node.value < v) {
      node.right = this._addChild(node.right,v)
    }
    return node
  }
  preTraversal() {
    this._pre(this.root)
  }
  _pre(node) {
    if (node) {
      console.log(node.value)
      this._pre(node.left)
      this._pre(node.right)
    }
  }
  mid() {
    this._mid(this.root)
  }
  _mid(node) {
    if (node) {
      this._mid(node.left)
      console.log(node.value)
      this._mid(node.right)
    }
  }
  back() {
    this._back(this.root)
  }
  _back(node) {
    if (node) {
      this._back(node.left)
      this._back(node.right)
      console.log(node.value)
    }
  }
  getTree() {
    return this.root
  }
}

var test = new BST()
test.addNode(2)
test.addNode(5)
test.addNode(3)
test.addNode(8)
test.addNode(7)
test.addNode(4)
test.addNode(1)
test.preTraversal()
console.log('--------------------')
test.mid()
console.log('--------------------')

test.back()
console.log('--------------------')

console.log(test.getTree())