 function fibonacci(number) {

	var a = 1, b = 0, temp;

	// Fn = F(n-1) + F(n-2);
	// 3 = 2 + 1



	while (b <= 500) {
		temp = a;
		a = a + b;
		b = temp;
		number--;
		console.log(b);
	}
	
}

fibonacci(1);