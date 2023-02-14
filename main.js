
let form1 = document.querySelector('form');
let name1 = document.querySelector("#name");
let mail1 = document.querySelector("#mail");
let phone1 = document.querySelector("#phone");
let btn1 = document.querySelector("#btn");
let res = document.querySelector("#result")


form1.addEventListener('submit', function(e){
    e.preventDefault();

    if (!/^[a-zA-Z]+$/.test(name1.value)){
        res.style.display = "block";
        res.textContent = "Please fill first input out of the only letter";
    }else if (!/^[0-9]+$/.test(phone1.value)){
        res.style.display = "block";
        res.textContent = "Please fill out the number input field.";
    }else {
        res.style.display = "none"
    }
})