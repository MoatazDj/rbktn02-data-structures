var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value)
    if(this.head === null){
        this.head=newNode
        this.tail=newNode
    }
    this.tail.next = newNode
    this.tail= newNode
    return this.tail
  };

  list.removeHead = function() {
    var removedHead = this.head.value
    this.head = this.head.next
    return removedHead
  };

  list.contains = function(target) {
      var searchTarget = this.head
      while(searchTarget !== null){
          if(searchTarget.value === target){
            return true
          }
          searchTarget = searchTarget.next
      }
      return false
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
