let tarefa1 = "Fazer algo"
let tarefa2 = "Fazer outra coisa"
let tarefa3 = "Terminar as coisas pendentes de 3 nos atrás"

let tarefas = [tarefa1, tarefa2, tarefa3]
console.log(tarefas)

let tarefa4 = "Outra coisa pendente que foi esquecida"
tarefas.push(tarefa4)
console.log(tarefas)

let inserir = document.getElementById("inserir")
let visualizar = document.getElementById("visualizar")
let apagar = document.getElementById("apagar")
let input = document.getElementsByTagName("input")

inserir.onclick = () => {
    console.log("Inserir clicado!!")
    tarefas.push(input[0].value)
    alert("Tarefa adicionada!")
}

visualizar.onclick = () => {
    console.log("Visualizar clicado! Listando tarefas...")
    for(let x=1; x<=tarefas.length; x++) {
        console.log(`${x} = ${tarefas[x-1]}`)
    }
    alert("Itens listados no console!")    
}

apagar.onclick = () => {
    console.log("Apagar clicado! Limpando todos os registros de tarefas...")
    tarefas = []
    alert("Lista de tarefas zerada!")
    console.log(tarefas)
}
console.log(tarefas)