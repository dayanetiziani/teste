function verificaNumero() {
    var numero = parseInt(document.getElementById("solicitaNumero").value);

    var a = 0;
    var b = 1;

    while (b <= numero) {
        if (b === numero) {
            document.getElementById("resultado").innerHTML = `${numero} pertence à sequência de Fibonacci.`;
            return;
        }

        var temp = b;
        b = a + b;
        a = temp;
    }

    document.getElementById("resultado").innerHTML = `${numero} não pertence à sequência de Fibonacci.`;
}

function limparResultado() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("solicitaNumero").value = ""; 
}

