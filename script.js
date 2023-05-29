let checkBoxes = document.querySelectorAll("label")
let submitBtn = document.querySelector("button");
let selectedNum = 0;
let main = document.querySelector("main");

for(let checkBox of checkBoxes) {
  checkBox.addEventListener("click", function() {
    for(let checkBox2 of checkBoxes) {
      checkBox2.classList.remove("selected-num");
    }
    checkBox.classList.add("selected-num");
    selectedNum = +checkBox.textContent;
  });
}

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if(selectedNum) {
  main.style.animation = "unpop-up 0.4s ease-in";

  
  setTimeout(function() {
  main.innerHTML = `<div class="thank-image">
      <img src="images/illustration-thank-you.svg" alt=""/>
    </div>
    <div class="final-rating">
      You selected ${selectedNum} out of 5
    </div>
    <h1 id="thank-heading">
      Thank you!
    </h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
    </p>`;
    main.classList.add("main-thank")
    main.style.animation = "pop-up 0.4s ease-in"

  }
  , 350);
  }
});
