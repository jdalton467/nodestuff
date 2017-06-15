
var operator = process.argv[2];
var num1 = process.argv[3];
var num2 = process.argv[4];
var num3 = process.argv[5];

// var algnum3 = process.argv[5];

if(operator == "add"){
	console.log(parseInt(num1) + parseInt(num2));
}
else if(operator == "substract"){
	console.log(parseInt(num1) - parseInt(num2));
}
else if(operator == "multiply"){
	console.log(parseInt(num1) * parseInt(num2));
}
else if(operator == "divide"){
	console.log(parseInt(num1) / parseInt(num2));
}
else if(operator == "remainder"){
	console.log(parseInt(num1) % parseInt(num2));
}
else if(operator == "exp"){
	console.log(Math.pow(parseInt(num1),parseInt(num2)));
}
else if(operator == "algebra"){
	if(parseInt(num1) + "x" + "+" + parseInt(num2) +  "="  + parseInt(num3)){
			 console.log(parseInt(num1) + "x" + "+" + parseInt(num2) +  "="  + parseInt(num3));
			 console.log((parseInt(num3)-parseInt(num2))/parseInt(num1));
	    }
}
else{
	console.log("enter a valid operator");
}