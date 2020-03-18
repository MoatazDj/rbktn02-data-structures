

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    var Bucket = []
    var Tuple = [k, v]
    if(this._storage.get(index) !== undefined){
        Bucket=this._storage.get(index)
    }
    Bucket.push(Tuple)
    this._storage.set(index, Bucket)
}

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueRetrieved = this._storage.get(index)
  if(this._storage.get(index) !== undefined){
      for(var i =0; i<valueRetrieved.length; i++){
        if(valueRetrieved[i][0]===k){
          return valueRetrieved[i][1]
        }
      }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueRetrieved = this._storage.get(index)
  if(this._storage.get(index) !== undefined){
      for(var i =0; i<valueRetrieved.length; i++){
        if(valueRetrieved[i][0]===k){
          delete valueRetrieved[i][1]
        }
      }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


