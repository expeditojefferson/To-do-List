
let lista = JSON.parse(localStorage.getItem('@lista')) || []

function adicionarItem() {
    let tarefaDigitada = document.querySelector('#barra-adicionar').value

    if (tarefaDigitada === '' || tarefaDigitada === undefined) {alert('Preencha o campo')}
    else {
        let tarefaFormatada = String(tarefaDigitada).toUpperCase()
        lista.push(tarefaFormatada)

        limpaInput()
        mostraItens()
        salvarLista()
    }
}

function mostraItens() {
    let container = document.querySelector('#lista-de-tarefas')
    
    container.innerHTML = ''

    lista.map((elemento, indice)=> {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'li')

        let newSpan = document.createElement('span')
        newSpan.setAttribute('class', 'text-tarefa')
        newSpan.innerText = `${elemento}`

        let button = document.createElement('input')
        button.type = 'submit'
        button.value = 'X'
        button.addEventListener('click', ()=>{
            lista.splice(indice, 1)
            mostraItens()
            salvarLista()
        })
        
        container.appendChild(newDiv)
        newDiv.appendChild(newSpan)
        newDiv.appendChild(button)
    })
}
mostraItens()

function limpaInput() {
    document.querySelector('#barra-adicionar').value = ''
}

function salvarLista() {
    localStorage.setItem('@lista', JSON.stringify(lista))
}

setInterval(mostraItens, 1000)
