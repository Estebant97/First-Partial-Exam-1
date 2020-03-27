/* event.preventDefault()  prevents reloading of page*/
let fizzButton = document.getElementById("submitBtn");
let target = document.querySelector(".fizzBuzzNumber");
let result = document.querySelector(".resultsSection");
fizzButton.addEventListener("click", (event) => {
    event.preventDefault();
    let value = Number(target.value);
    if(value > 0){
        for(let i = 1; i < value; i++){
            if(i % 15 == 0){
                result.innerHTML += `<span class="fizz-buzz-item"> FizzBuzz </span>`;
            } else if(i % 3 == 0){
                result.innerHTML += `<span class="fizz-buzz-item"> Fizz </span>`;
            } else if(i % 5 == 0){
                result.innerHTML += `<span class="fizz-buzz-item"> Buzz </span>`;
            } else {
                result.innerHTML += `<span class="fizz-buzz-item"> ${i} </span>`;
            }
        }
        value = 0;
    } else{
        console.log("Provide a number")
    }
});
/* needed to add another event listener when the button is clicked deletes the result */