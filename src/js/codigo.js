function mudar_fundo(){
    document.getElementById("teste").style.background = "red";
    document.getElementById("teste").innerText = "PRAISE THE SUN";
}
function enviarInformacoes(){
	let nome = document.getElementById("nome").value;
	document.getElementById("texto").innerText = `Bem Vindo! ${nome}`;
    document.getElementById("nome").value = "";
}