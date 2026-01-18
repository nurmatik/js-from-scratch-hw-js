// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
	let number = num1;
	if(number < num2){
		number = num2;
	}

	if(number < num3){
		number = num3;
	}
	return number;
}

console.log(findLargest(5, 7, 3));
