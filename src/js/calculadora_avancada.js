function estilizarAprovado(resultadoBox, textResult, resultado){
    resultadoBox.classList.add('correct');
    resultadoBox.classList.remove('incorrect');
    textResult.innerText = `${resultado.toFixed(2)} Nota suficiente`;

}
function estilizarReprovado(resultadoBox, textResult, resultado){
    resultadoBox.classList.add('incorrect');
    resultadoBox.classList.remove('correct');
    textResult.innerText = `${resultado.toFixed(2)} Nota insuficiente`;
}
/*Função para calcular a média ponderada da nota de corte dos TRIs*/ 
function media_ponderada() {
    // Atribuição utilizando métodos funcionais
    const triId = ['linguagens', 'exatas', 'humanas', 'naturezas', 'redacao'];
    const pesosValores = triId.map(id => Number(document.getElementById(`peso-${id}`).value));
    const notasValores = triId.map(id => Number(document.getElementById(`${id}-input`).value));
    // Removendo as notas que não são números
    const notasValidas = notasValores.filter(nota => !isNaN(nota));
    // Realizando soma dos pesos e controlando as que não são números
    const somaPesos = pesosValores.reduce((acc, peso) => acc + (isNaN(peso) ? 0 : peso));

    const textResult = document.getElementById("calc-result");
    const resultadoBox = document.querySelector('.calculator-result');
    //Estrutura condicional para descobrir se não teve nenhum input vazio
    if (notasValidas.length === notasValores.length && somaPesos !== 0) {
        // Cálculo da média ponderada
        const resultado = triId.reduce((acc, id, index) => acc + (notasValores[index] * pesosValores[index]), 0) / somaPesos;
        
        resultado < 700 ? estilizarReprovado(resultadoBox, textResult, resultado) : estilizarAprovado(resultadoBox, textResult, resultado);
    } else {
        resultadoBox.classList.remove('incorrect');
        resultadoBox.classList.remove('correct');
        alert("Preencha ao menos um campo.");
    }
}