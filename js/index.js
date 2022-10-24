document.getElementById("c").disabled = true;

function multiplicar() {
    const valueA = document.getElementById("a");
    const valueB = document.getElementById("b");

    var result = valueB.value * valueA.value;
    document.getElementById("c").value = result; 
}


