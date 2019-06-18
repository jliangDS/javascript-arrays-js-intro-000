var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
];

var addElementToBeginningOfArray = function(array, element){
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = function(array, element){
  return [...array, element]
}

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element)
  return array
}
