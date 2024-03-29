function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        
        if (chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML =`
            <h2>Game Over!</h2>
            <h3>Pressione o botão abaixo para jogar novamente</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style.backgroundColor = '#0F0F0F'

        } else {
            elementoChute.innerHTML += '<div>Valor inválido</div>'
            return
        }

    } 

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto){

        document.body.style.backgroundColor ='#508D69'
        document.body.style.color = '#FFFFFF'

        document.body.innerHTML =`
            <h2>Você acertou!</h2>
            <h3>o número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div class="dica">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    } else {
        elementoChute.innerHTML += '<div class="dica">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
    
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
