function makeArray(firstArray, secondArray, maxLength) {
  let emptyArray = [];
  if (maxLength === 0) {
    return emptyArray;
  } else {
    for (
      let i = 0;
      emptyArray.length <= maxLength && i < firstArray.length;
      i++
    ) {
      emptyArray.push(firstArray[i]);
    }
    for (
      let i = 0;
      emptyArray.length < maxLength && i < secondArray.length;
      i++
    ) {
      emptyArray.push(secondArray[i]);
    }
    return emptyArray;
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
