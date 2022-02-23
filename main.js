let screenOutput = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let Output = "";
screenOutput.readOnly = true;


for (let value of buttons) {
    value.addEventListener('click', function equation(element) {
        let buttondata = element.target.innerHTML;
        if (buttondata == "X") {
            buttondata = "*";
            Output += buttondata;
            screenOutput.value = Output;
        }
        else if (buttondata == "=") {
            screenOutput.value = eval(Output);


        }
        else if (buttondata == "C") {
            Output = "";
            screenOutput.value = Output;
        }

        else if (buttondata == 'DEL') {
            Output = Output.slice(0, -1);
            screenOutput.value = Output;
        }

        else {
            Output += buttondata;
            screenOutput.value = Output;

        }



    })
}
