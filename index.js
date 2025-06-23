// 1. receivesAFunction - takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction - returns a named function
function returnsANamedFunction() {
  // named function
  function namedFunc() {
    return "I am named!";
  }
  return namedFunc;
}

// 3. returnsAnAnonymousFunction - returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am anonymous!";
  };
}

// Exporting functions (if your tests need them)
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};