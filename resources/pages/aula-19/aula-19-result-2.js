obj1 = {
    nome: "Banana",
    cor: "Amarelo",
    preco: 5.00,
    tipo: "Fruta"
}

obj2 = {
    nome: "Tomate",
    cor: "Vermelho",
    preco: 8.00,
    tipo: "Legume"
}

obj3 = {
    nome: "Alface",
    cor: "Verde",
    preco: 3.00,
    tipo: "Verdura"
}

obj4 = {
    nome: "Beringela",
    cor: "Roxo",
    preco: 9.00,
    tipo: "Legume"
}

let objetos = [obj1, obj2, obj3, obj4]

console.log(objetos)

for (x=0; x<objetos.length; x++) {
    console.log(objetos[x].nome)
}