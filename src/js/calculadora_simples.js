/*Função para calcular a média ponderada da nota de corte dos TRIs*/ 
function media_ponderada(){
    // Elementos DOM dos inputs de notas
    let tri1 = Number(document.getElementById("linguagens-input").value);
    let tri2 = Number(document.getElementById("exatas-input").value);
    let tri3 = Number(document.getElementById("humanas-input").value);
    let tri4 = Number(document.getElementById("naturezas-input").value);
    let tri5 = Number(document.getElementById("redacao-input").value);

    // Elementos DOM dos pesos de notas
    let peso1 = Number(document.getElementById("peso-linguagens").value);
    let peso2 = Number(document.getElementById("peso-exatas").value);
    let peso3 = Number(document.getElementById("peso-humanas").value);
    let peso4 = Number(document.getElementById("peso-naturezas").value);
    let peso5 = Number(document.getElementById("peso-redacao").value);

    let somaPesos = peso1+peso2+peso3+peso4+peso5;

    let textResult = document.getElementById("calc-result");

    // Cálculo da média ponderada das notas de corte dos TRIs
    let result = ((tri1 * peso1) + (tri2 * peso2) + (tri3 * peso3) + (tri4 * peso4) + (tri5 * peso5)) / somaPesos;
    result = isNaN(result) ? 0 : result;

    textResult.innerText = `${result.toFixed(2)}`;
}
