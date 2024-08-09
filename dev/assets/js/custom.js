document.addEventListener('DOMContentLoaded', function() {
    new SlimSelect({
        select: '#selectElement',
        placeholder: 'Select an option',
        settings: {
            showSearch: false,  
            placeholderText: "Custom Placeholder Text",
            placeholder: 'Select an option',
          }
    });
});

//textarea symbols amount
const textareasArr = document.querySelectorAll("textarea")
const symbolsAmountCell = document.querySelectorAll(".symbols-amount span")

for (let i = 0; i < textareasArr.length; i++) {
    textareasArr[i].addEventListener("input", function() {
        var value = textareasArr[i].value
        symbolsAmountCell[i].innerHTML = value.length
    })
}

