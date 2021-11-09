//Exercises 1 . how to change 1th index and 4th index of array .  let myData = ["a", "b", "c", "d", "e", "f", "g"]; expect output  ["a", "e", "c", "d", "b", "f", "g"]

var myData = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var temp = myData[1]; // b
myData[1] = myData[4]; //6
myData[4] = temp; //1

console.log(myData);

// Exercises 2. You should find how many time  repeating   number of 3 in the store array
// var  store =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];   expecting output :  4

var store = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var sumOf3 = 0;
for (el of store) {
	if (el === 3) {
		el = 1;
		sumOf3 += el;
	}
}

console.log(sumOf3);

// Exercises 3 .  You should changed mixed array from negative to positive Expecting output has given in the below
// Hint : You can use for method for solving this task
// var  mixed = [ -12, 11, -13, -5, 6, -7, 3, -2, -6]  expecting output output  -12 -13 -5 -7 -2 -6 11 6 3

var mixed = [-12, 11, -13, -5, 6, -7, 3, -2, -6];

var changed = [];
var newMixed = [];

for (var i = 0; i < mixed.length; i++) {
	if (mixed[i] > 0) {
		changed.push(mixed[i]);
	} else {
		newMixed.push(mixed[i]);
	}
}

var mix = [...newMixed, ...changed];

console.log(mix);
