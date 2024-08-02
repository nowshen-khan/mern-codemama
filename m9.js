/**
 1. Leap Year Problem (Easy)

Problem Statement: Write a program that checks if a year entered by the user is a leap year or not.
Input: The input consists of an integer.
Output: Output will print the type of the year whether it is leap year or not.
Constraints: 0 ≤ |S| ≤ 2^31 - 1

Example-1: Enter a year
Input:1900
Output: 1900 is not a leap year.

Example-2: Enter a year
Input: 2020
Output: 2020 is a leap year.    

*/

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const a = Number(input);
	if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
		console.log(`${a} is a leap year.`);
	} else {
		console.log(`${a} is not a leap year.`);
	}
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});

/**
 ** Two Point Distance (Easy)

Problem Statement: Write a program to calculate distance between two points.

Input: The input consists of four double numbers. the first two numbers indicate the co-ordinate of first point and the second two numbers indicate the co-ordinates of second point.
Output: Output is the distance of two points.
Constraints: The program should print the number with exactly two decimal points.

Example: Enter the co-ordinates of two points.
Input: 
    0 0
    2 2
Output: Distance: 2.83
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split("\n");
	// console.log(data);
	const a = data[0].split(" ");
	const b = data[1].split(" ");
	// console.log(a,b)
	const x1 = Number(a[0]);
	const y1 = Number(a[1]);
	const x2 = Number(b[0]);
	const y2 = Number(b[1]);
	// console.log(x1,y1,x2,y2)
	const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	console.log(`Distance: ${d.toFixed(2)}`);
}

/**
 3. Positive Negative (Easy)

Problem Statement: Write a program that checks if a number entered by the user is positive, negative, or zero.

Input: The input consists of a integer.
Output: Output the type of number.
Constraints: -2^31 ≤ |S| ≤ 2^31 - 1

Example-1: Enter a number
Input: 5
Output: 5 is a positive number.

Example-2: Enter a number
Input: -3
Output: -3 is a negative number.

Example-3: Enter a number
Input: 0
Output: The number is zero.    
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	if (input > 0) {
		console.log(`${input} is a positive number.`);
	} else if (input == 0) {
		console.log(`The number is zero.`);
	} else {
		console.log(`${input} is a negative number.`);
	}
}

/**
 4. Game of Swap

Problem Statement: Write a program that swaps the values of two variables.
Input: The input consists of two integers.
Output: Output consists of two integers.
Constraints:-2^31 ≤ |S| ≤ 2^31 - 1

Example: Enter two numbers
Input: 10 20
Output: 
    Before swapping: num1 = 10, num2 = 20
    After swapping: num1 = 20, num2 = 10
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	let data = input.split(" ");
	let num1 = data[0];
	let num2 = data[1];
	console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
	let temp = num1;
	num1 = num2;
	num2 = temp;

	console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
}
