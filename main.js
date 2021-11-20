
// 1-Masala
function sumInput() {
    var variables = [];
    var addingNumber = prompt("Raqam kiriting:");
    variables.push(addingNumber);

    for (var item of variables) {
        item = Number(item)

        if (isNaN(item)) {
            function sumNumbers(variables) {
                var result = 0;

                for (var addition of variables) {
                    result = (result) * 1 + (addition) * 1
                }
                return result
            }

            variables.pop(addingNumber);
        } else {

            variables.push(addingNumber);
        }
    }
    alert(sumNumbers(variables));
}
var inputSum = sumInput();

// End of 1-Masala

// 2-Masala
var typeOfMusic = [
    "Jazz",
    "Blues"
]
console.log(typeOfMusic);

typeOfMusic.push("Rock-n-roll");
console.log(typeOfMusic);

typeOfMusic.splice(1, 1, "Classic");
console.log(typeOfMusic);

typeOfMusic.shift();
console.log(typeOfMusic);

typeOfMusic.unshift("Rap", "Reggae");
console.log(typeOfMusic);

// End of 2-Masala

// 3-Masala
var salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
}

function sumSalaries(salaries) {
    result3 = 0

    for (var item3 in salaries) {
        result3 = result3 + salaries[item3]
    }

    return result3
}
console.log(sumSalaries(salaries));

//  End of 3-Masala