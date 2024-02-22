//Questão 2
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

//Questão 3

const caminhoDoArquivo = './dados.json'; // Supondo que o arquivo está no mesmo diretório

// Função para carregar os dados do arquivo JSON
async function carregarDados() {
    try {
        const resposta = await fetch(caminhoDoArquivo);

        if (!resposta.ok) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        return dados.faturamento;
    } catch (erro) {
        console.error(erro);
    }
}

// Função principal que realiza o cálculo com os dados carregados
async function calcularDados(tipo) {
    const faturamentoMensal = await carregarDados();

    if (tipo === 'menor') {
        const menorValor = Math.min(...faturamentoMensal.map(item => item.valor));
        document.getElementById("resultado1").innerHTML = `Menor valor: ${menorValor}`;
    } else if (tipo === 'maior') {
        const maiorValor = Math.max(...faturamentoMensal.map(item => item.valor));
        document.getElementById("resultado2").innerHTML = `Maior valor: ${maiorValor}`;
    } else if (tipo === 'superior') {
        const mediaMensal = faturamentoMensal.reduce((total, item) => total + item.valor, 0) / faturamentoMensal.length;
        const diasSuperiorMedia = faturamentoMensal.filter(item => item.valor > mediaMensal).length;
        document.getElementById("resultado3").innerHTML = `Dias com valor superior à média: ${diasSuperiorMedia}`;
    }
}

// Exemplo de uso da função para carregar dados
carregarDados().then(dados => {
    console.log('Dados carregados:', dados);

    // Aqui você pode realizar qualquer manipulação ou processamento dos dados
}).catch(erro => {
    console.error('Erro ao carregar os dados:', erro);
});

//Questão 4
/// Objeto com os valores de faturamento por estado
const dados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual
function calcularPercentual(valorEstado, total) {
    return (valorEstado / total) * 100;
}

// Função para exibir os resultados para um estado
function calcularEstado(estado) {
    const valorEstado = dados[estado];
    const total = calcularTotal();
    const percentual = calcularPercentual(valorEstado, total);
    document.getElementById(`resultado${estado}`).innerHTML = `Percentual de representação: ${percentual.toFixed(2)}%`;
}

// Função para calcular o total
function calcularTotal() {
    // Some os valores de faturamento
    const total = dados.SP + dados.RJ + dados.MG + dados.ES + dados.Outros;
    return total;
}

// Funções para calcular e exibir os resultados para cada estado
function calcularSP() {
    calcularEstado('SP');
}

function calcularRJ() {
    calcularEstado('RJ');
}

function calcularMG() {
    calcularEstado('MG');
}

function calcularES() {
    calcularEstado('ES');
}

function calcularOU() {
    calcularEstado('Outros');
}


