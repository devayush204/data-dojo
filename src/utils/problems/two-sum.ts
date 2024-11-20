import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSumOfTwo = `def sum_of_two(a, b):
    # Write your code here
    `;

// checks if the user has the correct code
const handlerSumOfTwo = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const inputs = [
      [1, 2],
      [10, -5],
      [0, 0],
    ];

    const answers = [3, 5, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(inputs[i][0], inputs[i][1]);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("sumOfTwo handler function error");
    throw new Error(error);
  }
};

export const twoSum: Problem = {
  id: "sum-of-two",
  title: "Sum of Two Numbers",
  problemStatement: `<p class='mt-3'>
    Write a function that takes two integers <code>a</code> and <code>b</code> and returns their sum.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "a = 1, b = 2",
      outputText: "3",
      explanation: "The sum of 1 and 2 is 3.",
    },
    {
      id: 2,
      inputText: "a = 10, b = -5",
      outputText: "5",
      explanation: "The sum of 10 and -5 is 5.",
    },
    {
      id: 3,
      inputText: "a = 0, b = 0",
      outputText: "0",
      explanation: "The sum of 0 and 0 is 0.",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>-1000 ≤ a, b ≤ 1000</code>
  </li>`,
  handlerFunction: handlerSumOfTwo,
  starterCode: starterCodeSumOfTwo,
  order: 2,
  starterFunctionName: "def sum_of_two(",
};

