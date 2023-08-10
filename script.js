//your JS code here. If required.
let res = ""
for(let i=1; i<=100; i++){
	if( i%3===0 && i%5===0)
		res = res + "FizzBuzz" + "\n" ;
	else if(i%5===0)
		res = res + "Buzz" + "\n" ;
	else if (i%3===0)
		res = res + "Fizz" + "\n" ;
	else
	res = res + i + "\n" ;
}

alert(res)
