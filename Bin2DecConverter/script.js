const input = document.getElementById("input-number");
const output = document.getElementById("output-number");

document.getElementById("Bin2Dec").addEventListener("click", function() {
    var binary = input.value;
    
    var decimal = 0;
    var pow = binary.length - 1;
    for(var i = 0; i < binary.length; i++){
        if(binary[i] == '1'){
            decimal += Math.pow(2, pow);
            pow--;
        }
        else{
            if(binary[i] == '0'){

            }
            else{
                i = binary.length;
                alert("Only use 0 and 1 for binary values");
            }
        }
    }
    output.innerHTML = decimal;
    input.value = "";
});

document.getElementById("Dec2Bin").addEventListener("click", function() {
    var decimal = input.value;
    var binary = "";

    for(var i = 0; i < 10 && decimal > 0; i++){
        binary = (decimal % 2) + binary;
        decimal = Math.trunc(decimal/2);
    }

    output.innerHTML = binary;
    input.value = "";
});