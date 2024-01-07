let div = document.createElement("div")
div.className = "divi"
div.id = "divid"

let h1 = document.createElement("h1")
h1.innerText = "Hehehhoho"

div.append(h1)
document.body.append(div)


let pais = document.querySelector(".paises :nth-child(2)")
console.log(pais)
pais.remove()


let ativ1_h1 = document.createElement("h1")
h1.innerText = "Luiza"

document.body.append(ativ1_h1)

let ativ1_h2 = document.getElementsByTagName("h2")
ativ1_h2[0].remove()



let tarefa1 = "Fazer algo"
let tarefa2 = "Fazer outra coisa"
let tarefa3 = "Terminar as coisas pendentes de 3 nos atrás"
let tarefa4 = "Outra coisa pendente que foi esquecida"
let tarefas = [tarefa1, tarefa2, tarefa3, tarefa4]
console.log(tarefas)

let visualizar = document.getElementById("visualizar")
let elementoPai
let elementoFilho

visualizar.onclick = () => {
    elementoPai = document.createElement("ul")
    for(let x=0; x<tarefas.length; x++) {
        elementoFilho = document.createElement("li")
        elementoFilho.innerText = tarefas[x]
        elementoPai.append(elementoFilho)
    }
    document.body.append(elementoPai)
}

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

let somar = document.getElementById("somar")
let subtrair = document.getElementById("subtrair")
let multiplicar = document.getElementById("multiplicar")
let dividir = document.getElementById("dividir")

let resultado = document.createElement("h1")
let calculo

somar.onclick = () => {
    calculo = n1.valueAsNumber + n2.valueAsNumber
    resultado.innerText = calculo
    document.body.append(resultado)
}

subtrair.onclick = () => {
    calculo = n1.valueAsNumber - n2.valueAsNumber
    resultado.innerText = calculo
    document.body.append(resultado)
}

multiplicar.onclick = () => {
    calculo = n1.valueAsNumber * n2.valueAsNumber
    resultado.innerText = calculo
    document.body.append(resultado)
}

dividir.onclick = () => {
    calculo = n1.valueAsNumber / n2.valueAsNumber
    resultado.innerText = calculo
    document.body.append(resultado)
}

let aluno = {
    nome: 'Maria',
    sobrenome: 'Silva'
};

// conversão para string, localstorage só aceita string
let alunoString = JSON.stringify(aluno);
localStorage.setItem('aluno', alunoString);

let alunoObjeto = JSON.parse(localStorage.getItem('aluno'))
console.log(alunoObjeto)



let ativ2Btn1 = document.getElementById("ativ2-btn1")
let ativ2Btn2 = document.getElementById("ativ2-btn2")
let ativ2Btn3 = document.getElementById("ativ2-btn3")
let itensCompra = []

ativ2Btn1.onclick = () => {
    let ativ2Input = document.getElementById("ativ2-input")
    itensCompra.push(ativ2Input.value)
    localStorage.setItem('itensCompra', JSON.stringify(itensCompra))
}

let ul = document.createElement("ul")

ativ2Btn2.onclick = () => {
    let itens = JSON.parse(localStorage.getItem('itensCompra'))
    for(let x=0; x<itens.length; x++) {
        console.log(itens[x])
        let item = document.createElement("li")
        item.innerText = itens[x]
        ul.append(item)
    }
    document.body.append(ul)
}

ativ2Btn3.onclick = () => {
    localStorage.clear()
    alert("Local Storage limpo com sucesso!!")
}