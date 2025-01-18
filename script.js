function firstNonRepeatedChar(str) {
 // Write your code here
	str=str.split('').sort().join('');
	let i =0;
	let j =1;
	while(i<str.length){
		j=i+1;
		let c=0
		while(str[i]===str[j]){
			j++;
			c++;
		}
		if(c===0)return str[i];
		i=j;
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
