function some(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(some(1)(2)(3));
