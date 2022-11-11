const burger = document.querySelector('.burger')
const cancel = document.querySelector('.cancel')
console.log(cancel);
console.log(burger);
let clicked = false
function isclick() {
    if (!clicked) {
        burger.style.display = 'none'
        cancel.style.display = 'block'
        clicked = true

    }
    else {
        burger.style.display = 'block'
        cancel.style.display = 'none'
        clicked = false
    }
}
