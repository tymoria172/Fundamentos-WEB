


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '98%'
email.style.width ='98%'
assunto.style.width ='98%'

function validaNome (){
    let txt = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML='Nome Invalido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML='Nome Valido'
        txtNome.style.color='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
     {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML='E-mail Valido'
        txtEmail.style.color='green'
        emailOk = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100)
    {
        txtAssunto.innerHTML = 'Limite de caracteres atingido, maximo permitido: 100'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulario enviado com Sucesso!')
} else {
    alert('Preencha o formulario de forma correta')
}
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}


