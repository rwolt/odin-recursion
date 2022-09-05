//Using iteration, write a function that takes a number and returns an array that many numbers from the fibonacci sequence.

const fibs = (num) => {
  let fibArray = [0, 1];
  for (let i = 2; i < num; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
};

// console.log(fibs(8));

//Now write another method which solves the same problem recursively

const fibsRec = (num, fibArray = [0, 1]) => {
  if (num == 2) return fibArray;
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibsRec(num - 1, fibArray);
};

// console.log(fibsRec(8));
