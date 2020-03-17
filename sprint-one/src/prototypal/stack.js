var Stack = function() {
  var myStack = Object.create(stackMethods)
  myStack.storage={};
  myStack.counter=0;

    return myStack;

};

var stackMethods = {};

stackMethods.size = function(){
  return this.counter
}
stackMethods.push=function(value){
  this.counter ++
  this.storage[this.counter] = value
}
stackMethods.pop=function(){
    if(this.counter>0){
        var deletedVal = this.storage[this.counter]
        delete this.storage[this.counter]
        this.counter--
        return deletedVal
    }
}