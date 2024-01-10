/*Função para calcular a média ponderada da nota de corte dos TRIs*/ 
function media_ponderada(){
    // Elementos DOM dos inputs de notas
    let tri1 = Number(document.getElementById("linguagens-input").value);
    let tri2 = Number(document.getElementById("exatas-input").value);
    let tri3 = Number(document.getElementById("humanas-input").value);
    let tri4 = Number(document.getElementById("naturezas-input").value);
    let tri5 = Number(document.getElementById("redacao-input").value);

    // Vetor com o ID dos elementos DOM dos pesos
    const pesosId = ['peso-linguagens', 'peso-exatas', 'peso-humanas', 'peso-naturezas', 'peso-redacao'];
    const pesos = {};
    pesosId.forEach(id => { pesos[id] = Number(document.getElementById(id).value); });

    // Cálculo da soma dos pesos
    let somaPesos = 0;
    for (let i = 0; i < pesosId.length; i++) {
        somaPesos += isNaN(pesos[pesosId[i]]) ? 0 : pesos[pesosId[i]];
    }

    let notas = [tri1, tri2, tri3, tri4, tri5];
    let notasValidas = notas.filter(nota => !isNaN(nota));


    // Cálculo da média ponderada das notas de corte dos TRIs
    let textResult = document.getElementById("calc-result");
    if (notasValidas.length === notas.length && somaPesos !== 0) {
        let result = ((tri1 * pesos['peso-linguagens']) + (tri2 * pesos['peso-exatas']) + (tri3 * pesos['peso-humanas']) + (tri4 * pesos['peso-naturezas']) + (tri5 * pesos['peso-redacao'])) / somaPesos;

        textResult.innerText = `${result.toFixed(2)}`;
    } else {
        textResult.innerText = `Preencha corretamente todos os campos!`;
    }
}

function media() {
    const triValues = ['linguagens', 'exatas', 'humanas', 'naturezas', 'redacao'];
    const pesoValues = triValues.map(id => Number(document.getElementById(`peso-${id}`).value));

    const notas = triValues.map(id => Number(document.getElementById(`${id}-input`).value));
    const notasValidas = notas.filter(nota => !isNaN(nota));

    const somaPesos = pesoValues.reduce((acc, peso) => acc + (isNaN(peso) ? 0 : peso), 0);
    const textResult = document.getElementById("calc-result");

    if (notasValidas.length === notas.length && somaPesos !== 0) {
        const resultado = triValues.reduce((acc, id, index) => acc + (notas[index] * pesoValues[index]), 0) / somaPesos;

        textResult.innerText = `${resultado.toFixed(2)}`;
    } else {
        textResult.innerText = "Preencha corretamente todos os campos!";
    }
}
