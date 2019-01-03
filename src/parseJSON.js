// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

/*

'{"apple": 10,"banana": 20,"orange": [1, 2, 3],"pickle": null}'
*/

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // Input : string containing json obj
  // Output : object
  // Constraints : na
  // Edge Cases : empty string, array, obj, undefined, func

  var isDigits = function(strVal) {
    
  };

  var toPrimitive = function(strVal) {
    if (strVal === 'null') {
      return null;
    }
  };
  
};
