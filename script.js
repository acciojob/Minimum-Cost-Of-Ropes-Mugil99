function calculateMinCost() {
  //your code here
  var inputData=document.querySelector("#rope-lengths").value;
  var inputArr=inputData.split(",");
  for (let i = 0; i < inputArr.length; i++) {
  	inputArr[i]=Number(inputArr[i]);
  }
	inputArr.sort((a,b)=>a-b);
  var cost=0;
	while (inputArr.length>1) {
		let a=inputArr.shift();
		let b=inputArr.shift();
		let merged=a+b;
		cost+=merged;
		inputArr.push(merged);
		inputArr.sort((a,b)=>a-b);

	}
  document.querySelector("#result").textContent=cost;
}  
