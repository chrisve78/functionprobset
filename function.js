//Write a function isEven() which takes a single numeric argument and returns true if
//the number is even and false otherwise.
function isEven(number){
	// if(number % 2 === 0){
	// 	return true;
	// }else{
	// 	return false;
	// }
	return number % 2 === 0;
}

//Write a function factorial() which takes a single numeric argument and returns
//the factorial of that number
// 4! is 4 x 3 x 2 x 1
// 6! is 6 x 5 x 4 x 3 x 2 x 1
// 0! is 1
function factorial(number){
	// recursion
	// if(number < 0){
	// 	return;
	// }else if(number === 0){
	// 	return 1;
	// }else{
	// 	return number * factorial(number-1);
	// }
	//iteration
	var result = 1
	for(var i = 2; i <= number; i++){
		result *= i;
	}
	return result;
}

//Write a function kebabToSnake() which takes a single kebab cased string argument
// and returns the snake_cased_version. Replace "-" with "_"
function kebabToSnake(string){
	var result = string.replace(/-/g, "_")
	return result;
}