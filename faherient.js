const numberInput = document.querySelector ('.number')
const firstButton = document.querySelector ('#firstbtn')
const secondButton = document.querySelector ('#secondbtn')




firstButton.addEventListener ('click', convertToF)
secondButton.addEventListener ('click', convertToC)

function convertToF () {
    var fahrenhiet = (numberInput.value * 1.8 + 32);
    numberInput.value = `${fahrenhiet}°F`
}

function convertToC () {
    var celsius = ((numberInput.value - 32)/1.8);
    numberInput.value =`${celsius}°C`
}