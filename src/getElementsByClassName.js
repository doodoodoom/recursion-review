// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Input : class name to find elements of
  // Output : all elements with required class name
  // Constraints : should use document.body, element.childNodes, element.classList
  // Edge Cases : na
  var elements = [];

  var recurseThroughElements = function(element) {
    //document.body is our start point
    if (element.classList) {
      if (element.classList.contains(className)) {
        elements.push(element);
      }
    }
    if (element.childNodes.length > 0) {
      for (var x = 0; x < element.childNodes.length; x++) {
        recurseThroughElements(element.childNodes[x]);
      }
    }
  };
  recurseThroughElements(document.body);
  return elements;
};
