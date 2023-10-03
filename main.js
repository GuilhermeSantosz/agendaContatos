const form = document.getElementById('form-contato')
const nome = []
const numero = []


let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaContatos()
})

function adicionaLinha() {
    const inputNome = document.getElementById('name')
    const inputNumero = document.getElementById('number')

    if (numero.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já foi inserido`)
    }
    else if (nome.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`)
    }
    else {
        nome.push(inputNome.value)
        numero.push(inputNumero.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`

        linhas += linha
    }


    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaContatos (){
    const contatos = numero.length
    const rodapeContato = document.querySelector('tfoot')

    let linhaContato = `Você possui: ${contatos} contatos`
    
    rodapeContato.innerHTML = linhaContato
}
