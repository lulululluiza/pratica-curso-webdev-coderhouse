//retorna um array de objetos
let h6s = document.getElementsByTagName("h6")
console.log(h6s)

//retorna um objeto
let query = document.querySelector("#container p")
console.log(query)

//retorna um array de objetos
let queryAll = document.querySelectorAll("div")
console.log(queryAll)

//retorna o primeiro q ele encontrar
let queryPseudo = document.querySelector("input[name=genero]:checked")
console.log(queryPseudo)

let titulo = document.getElementById("titulo")
titulo.innerText = "hehehohoohoh"
console.log(titulo)

let container2 = document.getElementById("container2")
console.log(container2)
document.getElementById("container2").innerHTML = "<p>p inserido via JS</p> <p>Outro p inserido via JS</p>";

let ativ2_1 = document.querySelector(".ativ2 :nth-child(3)")
ativ2_1.innerText = "Texto do 3º li alterado via DOM"

let ativ2_2 = document.querySelector(".ativ2 :nth-child(1)")
ativ2_2.innerHTML = "<h1>Inserido via DOM uma tag h1 dentro do primeiro li</h1>"