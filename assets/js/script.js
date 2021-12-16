var get = document.querySelector("#generate");

get.addEventListener("click", function () {

    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    var enter;
    var confirmNumber;
    var confirmCharacter;
    var confirmUppercase;
    var confirmLowercase;
    character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    space = [];
    var choices = [];
    var toUpper = function (x) {
        return x.toUpperCase();
    };
    alpha2 = alpha.map(toUpper);

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("Invalid entry - must enter a number");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    if (confirmUppercase) {
        choices = choices.concat(alpha2)
    }
    if (confirmLowercase) {
        choices = choices.concat(alpha)
    }
    if (confirmCharacter) {
        choices = choices.concat(character)
    }
    if (confirmNumber) {
        choices = choices.concat(number)
    }
    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}