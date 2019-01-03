// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Input
    // Primitives
    // Iterable Object
  // Output : String version of the obj
  // Constraints : null is okay as a key or value, 
    // undefined is okay as key
    // function is invalid as key or value
  // Edge Cases
  // Array.isArray

  var msg;
  var msgArr = [];
  var isPrimitive = function(value) {
    if (value === undefined || value === null) {
      return true;
    }
    return ['number', 'string', 'boolean'].includes(typeof value);
  };

  var buildString = function(value) {
    // Expects primitive
    if (typeof value === 'string') {
      return '"' + value + '"';
    } else if (value === null) {
      return 'null';
    } else if (value === undefined) {
      return 'undefined';
    } else {
      return value.toString();
    }
  };

  if (isPrimitive(obj)) {
    return buildString(obj);

  } else if (Array.isArray(obj)) { // if array
    if (obj.length === 0) { 
      return '[]';
    }
    for (var value of obj) {
      if (value === undefined || typeof value === 'function') {
        continue;
      }
      msgArr.push(stringifyJSON(value));
    }
    return '[' + msgArr.join(',') + ']';

  } else if (Object.keys(obj).length === 0) { 
    return '{}';
  } else {
    for (var key in obj) {
      if ( obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      msgArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + msgArr.join(',') + '}';
    /*msg = '{';
    for (var key in obj) {
      if ( obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      msg += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    } 
    msgArr = msg.split('');
    msgArr.pop();
    var finalMsg = msgArr.join('');
    finalMsg += '}';
    return finalMsg;*/
  }
};

