class Queue {

    constructor() {
      this.storage={}
      this.start=0;
      this.end = 0;
    }
    size(){
      return this.start-this.end
    }
    enqueue(value){
      this.storage[this.start]=value
      this.start++
    }
    dequeue(){
      if((this.start-this.end)>0){
            var deletedVal = this.storage[this.end]
            delete this.storage[this.end]
            this.end++
            return deletedVal
      }
    }
}
