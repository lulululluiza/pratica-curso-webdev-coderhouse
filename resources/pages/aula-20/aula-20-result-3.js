let botao1 = document.getElementById("botao1")

botao1.addEventListener("mouseover", mouseOverEvent)

function mouseOverEvent() {
    console.log("MOUSEOVER!!!!")
}

botao1.onclick = () => {
    console.log("ONCLICK!!!")
}

function onContextMenu() {
    console.log("ON CONTEXT MENU!!!!")
}


let ativ3 = document.getElementById("ativ3")
ativ3.onclick = () => {
    console.log("Botão ativ3 foi clicado!!")
    alert("Luiza anuncia que o botão ativ3 foi clicado!!")
}

