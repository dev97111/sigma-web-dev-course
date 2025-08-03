5.// The Sum Selector:
 //  You are working on a function that should sum all numbers in an array until it encounters a negative number.
  //  Write a function that performs this summation.//
   function sumUntilNegative(arr) {
      let sum = 0;
      for (let num of arr) {
        if (num < 0) break;
        sum += num;
      }
      return sum;
    }

    function sumUntilNegativePrompt() {
      const input = prompt("Enter numbers separated by commas (e.g. 5,10,15,-2,7):");
      const arr = input.split(',').map(Number);
      const result = sumUntilNegative(arr);
      alert("✅ Sum until first negative is: " + result);
    }