const FindTheDifference = (min = 1, max = 100) => {
    var sumOfSquares = 0, squareOfSum = 0;
    for(var i = min; i < (max + 1); i++){
      sumOfSquares += (i * i);
      squareOfSum += i;
    }
    squareOfSum *= squareOfSum;
    Output(sumOfSquares, squareOfSum, min, max);
  }//Finds the difference between the sum of all the numbers between the max and min, squared, and the sum of all squared numbers between max and min.

  const Output = (sumOfSquares, squareOfSum, min, max) => {
    var output = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "Solving the SquareSumDifference problem from " + min + " to " + max + "... <br>" ;
    div.innerHTML += "The square of the sum is: " + squareOfSum + " <br>";
    div.innerHTML += "The sum of the squares is: " + sumOfSquares + " <br>";
    div.innerHTML += "The difference is: " + (squareOfSum - sumOfSquares) + "<br>";
    output.appendChild(div);
}//Handles the output of the HTML File

const ParseInput = () => {
    var min = parseInt(document.getElementById("min").value), max = parseInt(document.getElementById("max").value);
    if(min < max){
        FindTheDifference(min, max); 
    }
    else{
        alert("Min must be smaller than Max");
    }
}//Takes in the input from the HTML file from the max and min textarea.
