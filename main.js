let theInput = document.querySelector(".input");
let AllSpan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result > span");

AllSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkInLocalStorage()


        } else if (e.target.classList.contains("add-item")) {
            addElemnt()

        } else if (e.target.classList.contains("delete-item")) {
            removeFromLocalStorage()

        } else if (e.target.classList.contains("show-item")) {
            showLocalStorage()

        }
    })
})

function checkInLocalStorage() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            result.innerHTML = `Found Item Called [${theInput.value}]`
        } else {
            result.innerHTML = ` [${theInput.value}] is not found`
        }
    } else {
        result.innerHTML = `Input Can't Be Empty`
    }
}

function addElemnt() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            result.innerHTML = `We Already Found Item Called [${theInput.value}]`
        } else {
            localStorage.setItem(theInput.value, "value");
            theInput.value = ""
            result.innerHTML = `Add Sucssed`
        }
    } else {
        result.innerHTML = `Input Can't Be Empty`
    }
}


function removeFromLocalStorage() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value)
            result.innerHTML = `Item [${theInput.value}] is deleted`
            theInput.value = ""
        } else {
            result.innerHTML = `You Can't Delete This Item, He Not Found In Storage`
        }
    } else {
        result.innerHTML = `Input Can't Be Empty`
    }
}

function showLocalStorage() {
    result.innerHTML = ''
    if (localStorage.length) {
        for (let [key, value] of Object.entries(localStorage)) {
            if (value == "value") {

                result.innerHTML += `<span class ="key">${key}</span>`
            }
        }
    } else {
        result.innerHTML = `local Storage Is Empty`
    }
}