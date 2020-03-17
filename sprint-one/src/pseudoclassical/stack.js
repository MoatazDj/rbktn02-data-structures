var Stack = function() {
  this.storage = {};
  this.start=0;
};

Stack.prototype.size=function(){
  return this.start
}
Stack.prototype.push=function(value){
  this.start++
  this.storage[this.start]=value
}
Stack.prototype.pop=function(){
  if(this.start>0){
    var deletedVal = this.storage[this.start]
    delete this.storage[this.start]
    this.start--
    return deletedVal
  }
}

var stack= new Stack()