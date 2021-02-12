function generateBrackets (number) {
  const result = [];
  const bracketsLeft = ["{", "(", "["];
  const bracketsRight = ["}", ")", "]"];

  const addBracket = (str, left, right) => {
    if (left === number && right === number) {
      result.push(str);
      return;
    }
    if (left !== number) {
      addBracket(str + bracketsLeft[0], left + 1, right);
    }
    if (left > right) {
      addBracket(str + bracketsRight[0], left, right + 1);
    }
  }

  addBracket("", 0, 0);
  return result.join("");
}

function isBalanced(input) {
  const brackets = "[]{}()";
  const stack = [];

  for (let bracket of input) {
    const bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const brackets = generateBrackets(4);
console.log(brackets);
console.log(isBalanced(brackets));