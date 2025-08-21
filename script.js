// Скрипт генератора криптостойких паролей
const password_ele = document.getElementById("pwd_txt");
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*";
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
var pwd_length = document.getElementById("slider");

generate.addEventListener('click', () => {
    let password = "";
    var final_string = string;
    var good_password = false;

    while (!good_password) {
        for (var i = 0; i < pwd_length.value; i++) {
            let pwd = final_string[Math.floor(cryptoRandom() * final_string.length)];
            password += pwd;
        }
        if (/[@#$%&*!]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            good_password = true;
            password_ele.innerText = password;
        } else {
            password = "";
        }   
    }
    final_string = string;
});

clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_ele.innerText);
    alert("Пароль скопирован в буфер обмена!");
});

function cryptoRandom(){
    // return a crypto generated number
    // between 0 and 1 (0 inclusive, 1 exclusive);
    // Mimics the Math.random function in range of results
    var array = new Uint32Array(1),
      max = Math.pow(2, 32), // normally the max is 2^32 -1 but we remove the -1
                             //  so that the max is exclusive
      randomValue = window.crypto.getRandomValues(array)[0] / max;
  
      return randomValue;
  }
