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
        somaPesos += pesos[pesosId[i]];
    }

    // Cálculo da média ponderada das notas de corte dos TRIs
    let textResult = document.getElementById("calc-result");
    
    let result = ((tri1 * pesos['peso-linguagens']) + 
    (tri2 * pesos['peso-exatas']) + (tri3 * pesos['peso-humanas']) + 
    (tri4 * pesos['peso-naturezas']) + (tri5 * pesos['peso-redacao'])) / somaPesos;

    result = isNaN(result) ? 0 : result;

    textResult.innerText = `${result.toFixed(2)}`;
}