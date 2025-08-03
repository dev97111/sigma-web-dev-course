// 2. The Double Trouble:
 //  You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.//
function doubleUnique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result.push(arr[i] * 2);  // Double one of them
      i++; // Skip the next one
    } else {
      result.push(arr[i] * 2);  // Double normally
    }
  }
  return result;
}

doubleUnique([2, 2, 3, 4, 4, 5])
