const output = document.getElementById('output');
const errorMax = document.getElementById('maxError');
const errorMessageNumber = document.getElementById('noOfNumbersError');
const checkbox = document.getElementById('noRepetition');
let print = true;





function generate() {
    output.innerHTML = '';

    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let noOfNumbers = document.getElementById('numberOfNumbers').value;

    min = parseInt(min);
    max = parseInt(max);
    noOfNumbers = parseInt(noOfNumbers);

    if (max < min) {
        errorMax.innerHTML = 'Invalid Input! Maximum Value should be greater than Minimum Value';
        print = false;
    } else {
        errorMax.innerHTML = '';
        print = true;
    }

    if (checkbox.checked) {
        const temp = [];
        for (let index = 0; index < noOfNumbers; index++) {
            if (noOfNumbers > max - min + 1) {
                errorMessageNumber.innerHTML = 'Invalid Input! Please enter a number between 1 and ' + (max - min + 1);
            } else {
                // Checking Logic
                setInterval(() => {
                    let noOfNumbers = document.getElementById('numberOfNumbers').value;
                    noOfNumbers = parseInt(noOfNumbers);

                    if (noOfNumbers < 0) {
                        errorMessageNumber.innerHTML = 'Invalid Input! Please enter a positive value';
                    } else if (noOfNumbers > max - min + 1) {
                        errorMessageNumber.innerHTML = 'Invalid Input! Please enter a number between 1 and ' + (max - min + 1);
                    } else {
                        errorMessageNumber.innerHTML = '';
                    }
                }, 100);

                let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
                temp.push(randomNumber);

                for (let index2 = 0; index2 < index; index2++) {
                    if (temp[index2] == randomNumber) {
                        print = false;
                        index--;
                        temp.pop();
                    }
                }

                if (print) {
                    let span = document.createElement('span');
                    span.innerHTML = randomNumber;
                    output.appendChild(span);
                    output.scrollIntoView();
                }
                print = true;
            }
        }
    } else {
        for (let index = 0; index < noOfNumbers; index++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

            // Checking Logic
            setInterval(() => {
                let noOfNumbers = document.getElementById('numberOfNumbers').value;
                noOfNumbers = parseInt(noOfNumbers);

                if (noOfNumbers < 0) {
                    errorMessageNumber.innerHTML = 'Invalid Input! Please enter a positive value';
                } else {
                    errorMessageNumber.innerHTML = '';
                }
            }, 100);

            if (print) {
                let span = document.createElement('span');
                span.innerHTML = randomNumber;
                output.appendChild(span);
                output.scrollIntoView();
            }
            print = true;
        }
    }
}


function reset() {
    output.innerHTML = '';
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('numberOfNumbers').value = '';

    errorMessageNumber.innerHTML = '';
    errorMax.innerHTML = '';
}