let botao_submit = document.getElementById("botao-submit");


function calcular(){
    let tri1 = Number(document.getElementById("linguagens-input").value);
    let tri2 = Number(document.getElementById("exatas-input").value);
    let tri3 = Number(document.getElementById("humanas-input").value);
    let tri4 = Number(document.getElementById("naturezas-input").value);
    let tri5 = Number(document.getElementById("redacao-input").value);
    
    let result = document.getElementById("calc-result");
    result.innerText = `${tri1+tri2+tri3+tri4+tri5}`;
}
