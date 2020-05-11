exports.id = function(id) {
  return document.getElementById(id);
}
exports.classMultiple = function(className) {
  return document.getElementsByClassName(className);
}
exports.classSingle = function(className, n) {
  return document.getElementsByClassName(className)[n];
}
exports.doc = function() {
  return document.documentElement;
}