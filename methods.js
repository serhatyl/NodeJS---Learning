var methods = {}
var output = 0;

methods.updateServer = function() {
  console.log('Server Update Function Called');
}

methods.sumNumbers = function(a,b) {
  output = a + b;
  return output;
}

methods.areaOfRectangle = function(a,b) {
  output = a * b;
  return output;
}

exports.data = methods ;
