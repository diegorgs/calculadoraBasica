//incluindo eval()
function calc(tipo,valor){
    if(tipo == 'func'){
            if(valor == 'c'){
                document.getElementById('resultado').value = '';
            }
            if((valor == '+') || (valor == '-') || (valor == '*') || (valor == '/') || (valor == '.')){
                document.getElementById('resultado').value += valor;
            }
            if(valor == '='){
                document.getElementById('resultado').value = (eval(document.getElementById('resultado').value))
            }
    }else if(tipo == 'valor'){
        document.getElementById('resultado').value += valor;
    }
}






/* Sem eval()

let hist = document.getElementById('hist');
let tela = document.getElementById('resultado');
let lista = document.getElementById('lista');
let v1 = 0
let btnP = document.getElementById('btnP');

const contas = []

function calcular(valor) {

    tela.value += valor
    hist.innerHTML += valor

}
function operadores(valor) {
    v1 = Number(tela.value)
    op = valor
    tela.value = ''
    hist.innerHTML += op

}

function igual() {
    v2 = Number(tela.value)
    if (op === '+') { result = v1 + v2; }
    else if (op === '*') { result = v1 * v2; }
    else if (op === '/') { result = v1 / v2; }
    else if (op === '-') { result = v1 - v2; }
    else if (op === '.') { }

    tela.value = result
    hist.innerHTML = v1 + op + v2 + '=' + result + ' / ';
    contas.push(v1 + op + v2 + '=' + result + '<br>')
    lista.innerHTML = ''
    listar();

}

function listar() {
    for (let i in contas) {
        lista.innerHTML += contas[i];


    }

}

function limpar() {
    tela.value = ''
    hist.innerHTML = ''
    lista.innerHTML = '';
    contas.length = 0
    result = 0
}*/