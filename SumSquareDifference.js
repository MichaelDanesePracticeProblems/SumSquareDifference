const FindTheDifference = (min = 1, max = 100) => {
    var sumOfSquares = 0, squareOfSum = 0;
    for(var i = min; i < (max + 1); i++){
      sumOfSquares += (i * i);
      squareOfSum += i;
    }
    squareOfSum *= squareOfSum;
    var output = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "Solving the SquareSumDifference problem from " + min + " to " + max + "... <br>" ;
    div.innerHTML += "The square of the sum is: " + squareOfSum + " <br>";
    div.innerHTML += "The sum of the squares is: " + sumOfSquares + " <br>";
    div.innerHTML += "The difference is: " + (squareOfSum - sumOfSquares) + "<br>";
    output.appendChild(div);
  }

const ParseInput = () => {
    var min = parseInt(document.getElementById("min").value), max = parseInt(document.getElementById("max").value);
    console.log(min + " " + max); 
    FindTheDifference(min, max); 
}
