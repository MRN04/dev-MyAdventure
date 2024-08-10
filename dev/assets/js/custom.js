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

//search-bar selects
const searchBarFilters = document.querySelectorAll(".search-bar select")


searchBarFilters.forEach(el => {
    const idName = "#" + el.id
    
    document.addEventListener('DOMContentLoaded', function() {
        new SlimSelect({
            select: idName,
            placeholder: 'Select an option',
            settings: {
                showSearch: false,  
                placeholderText: "Custom Placeholder Text",
                placeholder: 'Select an option',
              }
        });
    });
});

//calendar, swap button
const dateInputsArr = document.querySelectorAll(".search-bar-filter input");
const dateInputWrapsArr = document.querySelectorAll(".search-bar-filter .date-input-wrap");
const swapBtn = document.querySelector(".swap-button")

for (let i = 0; i < dateInputWrapsArr.length; i++) {
    dateInputWrapsArr[i].addEventListener("click", function() {
        dateInputsArr[i].showPicker()
    })
}

swapBtn.addEventListener("click", function() {
    let first = dateInputsArr[0].value
    let second = dateInputsArr[1].value
    dateInputsArr[0].value = second
    dateInputsArr[1].value = first
})



