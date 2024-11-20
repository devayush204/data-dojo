// import assert from "assert";
// import { Problem } from "../types/problem";

// const starterCodeTwoSum = `function twoSum(nums,target){
//   // Write your code here
// };`;

// // checks if the user has the correct code
// const handlerTwoSum = (fn: any) => {
// 	// fn is the callback that user's code is passed into
// 	try {
// 		const nums = [
// 			[2, 7, 11, 15],
// 			[3, 2, 4],
// 			[3, 3],
// 		];

// 		const targets = [9, 6, 6];
// 		const answers = [
// 			[0, 1],
// 			[1, 2],
// 			[0, 1],
// 		];

// 		// loop all tests to check if the user's code is correct
// 		for (let i = 0; i < nums.length; i++) {
// 			// result is the output of the user's function and answer is the expected output
// 			const result = fn(nums[i], targets[i]);
// 			assert.deepStrictEqual(result, answers[i]);
// 		}
// 		return true;
// 	} catch (error: any) {
// 		console.log("twoSum handler function error");
// 		throw new Error(error);
// 	}
// };

// export const twoSum: Problem = {
// 	id: "two-sum",
// 	title: "1. Two Sum",
// 	problemStatement: `<p class='mt-3'>
//   Given an array of integers <code>nums</code> and an integer <code>target</code>, return
//   <em>indices of the two numbers such that they add up to</em> <code>target</code>.
// </p>
// <p class='mt-3'>
//   You may assume that each input would have <strong>exactly one solution</strong>, and you
//   may not use thesame element twice.
// </p>
// <p class='mt-3'>You can return the answer in any order.</p>`,
// 	examples: [
// 		{
// 			id: 1,
// 			inputText: "nums = [2,7,11,15], target = 9",
// 			outputText: "[0,1]",
// 			explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
// 		},
// 		{
// 			id: 2,
// 			inputText: "nums = [3,2,4], target = 6",
// 			outputText: "[1,2]",
// 			explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
// 		},
// 		{
// 			id: 3,
// 			inputText: " nums = [3,3], target = 6",
// 			outputText: "[0,1]",
// 		},
// 	],
// 	constraints: `<li class='mt-2'>
//   <code>2 ≤ nums.length ≤ 10</code>
// </li> <li class='mt-2'>
// <code>-10 ≤ nums[i] ≤ 10</code>
// </li> <li class='mt-2'>
// <code>-10 ≤ target ≤ 10</code>
// </li>
// <li class='mt-2 text-sm'>
// <strong>Only one valid answer exists.</strong>
// </li>`,
// 	handlerFunction: handlerTwoSum,
// 	starterCode: starterCodeTwoSum,
// 	order: 1,
// 	starterFunctionName: "function twoSum(",
// };


import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSumOfTwo = `function sumOfTwo(a, b){
  // Write your code here
};`;

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
  starterFunctionName: "function sumOfTwo(",
};

