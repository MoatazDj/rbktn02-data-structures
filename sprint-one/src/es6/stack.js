class Stack {

  constructor() {
    this.storage={};
    this.start=0;
  }

  size(){
    return this.start
  }
  push(value){
    this.start++
    this.storage[this.start]=value
  }
  pop(){
    if(this.start>0){
        var deletedVal = this.storage[this.start]
        delete this.storage[this.start]
        this.start--
        return deletedVal
    }
  }
}
var stack=new Stack()