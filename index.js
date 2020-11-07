const rangeInput = document.querySelector("#border-radius-value");
const divBorder = document.querySelector("#div-border-radius");
const resultBorderRadius = document.querySelector("p#result-border-radius");
	rangeInput.addEventListener("input", function(){
	divBorder.style.borderRadius =`${rangeInput.value}px`
	resultBorderRadius.innerHTML = `Border radius value: ${rangeInput.value}px`

})
