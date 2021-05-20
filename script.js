let idade = 18;
const isHuman = true;
const mês = "outubro";
const nome = "Izabel";
const sobrenome ="Soares";


if (idade > 18){
    console.log("você alcançou a maioridade")
} else {
    console.log("você ainda não alcançou a maioridade")
}

if (idade >= 18 && isHuman){
    console.log("você tem uma idade igual ou maior que 18", true)
} else {
    console.log("você ainda não alcançou a maioridade", false)
}

if ((mês == "janeiro") || (mês == "dezembro")) {
    console.log("você nasceu no mês de janeiro ou dezembro")
} else {
    console.log("você não nasceu no mês de janeiro nem dezembro")
}

if (nome.substring(0,1) === "R") {
    console.log("A primeira letra no nome é R")
} else {
    console.log("A primeira letra do nome não é R")
}

if ((nome.substring(0,1) === "E") || (sobrenome.lenght > 6)) {
    console.log("a primeira letra do nome é E ou o sobrenome tem mais de 6 letras")
}  else {
    console.log("a primeira letra do nome não é E ou o sobrenome tem um número menor ou igual a 6 letras ")
} 