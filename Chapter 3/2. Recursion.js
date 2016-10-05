/**
 * 
 */

function isEven(arg1) {
	if(arg1 >= 0) {
		if (arg1%2==0) 
			return true;
		else if (arg1%2==1)
			return false;
		else return (isEven(arg1-2));
	}
	else {
		if (arg1%2==0) 
			return true;
		else if (arg1%2==(-1))
			return false;
		else return (isEven(arg1+2));
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-14));