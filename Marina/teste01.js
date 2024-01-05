function media(){
    var n1 = Number(document.getElementById("1bi").value)
    var n2 = Number(document.getElementById("2bi").value)
    var n3 = Number(document.getElementById("3bi").value)
    var n4 = Number(document.getElementById("4bi").value)
    var media = ((2 * n1) + (2 * n2) + (3 * n3) + (3 * n4)) / 10
    resMedia.innerHTML = `Sua média é ${media}. </br>`
    if( media < 60){
        var nrec = 120 - media
        resMedia.innerHTML += `Você ficou de recuperação e precisa tirar ${nrec} para passar.</br>`
    }
}

function sem2(){
    var n1 = Number(document.getElementById("1bi").value)
    var n2 = Number(document.getElementById("2bi").value)
    var pontos1sem = (2 * n1) + (2 * n2)
    var ressem2 = Math.round((600 - pontos1sem) / 6)
    resSem2.innerHTML = `Você precisa de ${ressem2} em cada bimestre do segundo semestre.`
}

function bi4(){
    var n1 = Number(document.getElementById("1bi").value)
    var n2 = Number(document.getElementById("2bi").value)
    var n3 = Number(document.getElementById("3bi").value)
    var pontos123 = (2 * n1) + (2 * n2) + (3 * n3)
    var resbi4 = Math.round((600 - pontos123) / 3)
    resBi4.innerHTML = `Você precisa de ${resbi4} no quarto bimestre.<br/>`
    if (resbi4 > 100){
        resBi4.innerHTML += `Você já está em recuperação.`
    }

}
