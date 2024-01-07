//retorna um objeto
let paragrafo1 = document.getElementById("paragrafo1");
let entrada = document.getElementById("entrada");

//retorna um array de objetos
let paises = document.getElementsByClassName("paises");

console.log(paragrafo1.tagName)
console.log(entrada.value)
console.log(paises)



/* Atividade 1 */
let ativId = document.getElementById("ativ1-id");
console.log(ativId)

let ativClass = document.getElementsByClassName("ativ1-class");
console.log(ativClass)

console.log(`Primeiro elemento com a classe "ativ1-class":`)
console.log(ativClass[0])
