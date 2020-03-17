var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end=0;
};

Queue.prototype.size = function(){
   return this.start-this.end
}

Queue.prototype.enqueue = function(value){
    this.storage[this.start]= value
    this.start++
}

Queue.prototype.dequeue = function(){
      if((this.start-this.end)>0){
        var deletedVel = this.storage[this.end]
        delete this.storage[this.end]
        this.end++
        return deletedVel
      }
}

