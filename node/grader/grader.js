var scores1 = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(scores){
	var sum = 0;
	var avg;
	for(i = 0; i < scores.length; i++){
		sum += scores[i];
	}
	avg = Math.round(sum / scores.length);
	return avg;
}

console.log("Average score for environment science")
console.log(average(scores1));
console.log("Average score for organic chemistry")
console.log(average(scores2));