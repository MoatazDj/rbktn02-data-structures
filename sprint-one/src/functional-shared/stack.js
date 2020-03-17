var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var myStack = {}
  myStack.storage={};
  myStack.start=0;
 _.extend(myStack, stackMethods)
 return myStack;
};

var stackMethods = {};

 stackMethods.size=function(){
   return this.start
}
stackMethods.push=function(value){
  this.start++
  this.storage[this.start]= value
}
stackMethods.pop=function(value){
      if(this.start>0){
          var deletedVal = this.storage[this.start]
          delete this.storage[this.start]
          this.start--
          return deletedVal
      }
//  AssertionError: expected 1 to be at most 0
//  constructorPropertyCount = Object.keys(constructor).length;
//  assuming(extendsConstructor).expect(constructorPropertyCount).to.be.above(0);

}