var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var myQueue= Object.create(queueMethods);
 myQueue.storage={}
 myQueue.start=0;
 myQueue.end=0;
 return myQueue
};

var queueMethods = {};

queueMethods.size=function(){
    return this.start-this.end
}

queueMethods.enqueue=function(value){
  this.storage[this.start]=value
  this.start++
}
queueMethods.dequeue=function(){
      if((this.start-this.end)>0){
        var deletedVal = this.storage[this.end]
        delete this.storage[this.end]
        this.end++
        return deletedVal
      }
}