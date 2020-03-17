var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0
  // Implement the methods below
  someInstance.push = function(value) {
    i++
    storage[i] = value
    console.log(storage)
  };

  someInstance.pop = function() {
    if(i>0){
        var deletedVal = storage[i]
        delete storage[i]
        i--
        return deletedVal
    }
  };

  someInstance.size = function() {
    return i
  };

  return someInstance;
};
