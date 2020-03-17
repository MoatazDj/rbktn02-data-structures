var Queue = function() {
    var myQueue = {}
    myQueue.storage={}
    myQueue.start = 0
    myQueue.end=0
    _.extend(myQueue, queueMethods)
    return myQueue

};

var queueMethods = {};

queueMethods.size = function(){
  return this.end - this.start
}

queueMethods.enqueue = function(value){
  this.storage[this.end] = value
  this.end++
}

queueMethods.dequeue = function(){
  if((this.end-this.start)>0){
    var deletedVal = this.storage[this.start]
    delete this.storage[this.start]
    this.start++
    return deletedVal
  }
}

