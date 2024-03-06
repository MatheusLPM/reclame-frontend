import validator from "validator";
import Swal from 'sweetalert2'

import "../Styles/switchAlert.css"


export function checkCPF(cpf) {

    if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    const resto = (soma * 10) % 11;
    const digito1 = resto === 10 || resto === 11 ? 0 : resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    const resto2 = (soma * 10) % 11;
    const digito2 = resto2 === 10 || resto2 === 11 ? 0 : resto2;

    return digito2 === parseInt(cpf.charAt(10));
}
export function checkCNPJ(cnpj) {

    if (cnpj.length !== 14) {
        return false;
    }

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    let resultado = (soma % 11 < 2) ? 0 : (11 - soma % 11);

    if (resultado.toString() !== digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado.toString() !== digitos.charAt(1)) {
        return false;
    }

    return true;
}
export function checkEmail(email) {
    if (validator.isEmail(email)) {
        return true
    } else {
        return false
    }

}
export function checkNome(nome) {
    console.log(nome)
    if ((validator.isEmpty(nome)) || (nome.length < 4) || /^\s*$/.test(nome) || !/^[\p{L}\s]+$/u.test(nome)) {
        //console.log("nome muito curto")
        return false
    } else {
        return true
    }

}
export function checkTitulo(titulo) {
    console.log(titulo)
    if ((validator.isEmpty(titulo)) || (titulo.length < 4)) {
        return false
    } else {
        return true
    }
}
export function checkSenha(senha) {
    return validator.isStrongPassword(senha)
}
export function checkData(data) {


    const newData = new Date(data);
    const presentDate = new Date();

    const yearSelected = newData.getFullYear();
    const presentYear = presentDate.getFullYear();


    const age = presentYear - yearSelected;

    if (age < 18 || yearSelected < 1900) {
        return false;
    }

    return true;
}
export function checkCidade(cidade) {
    return validator.isEmpty(cidade) ? false : true
}
export function checkEstado(data) {
    return validator.isEmpty(data) ? false : true
}
export function checkCep(cep) {

    cep = cep.replace(/[^\d]+/g, '');


    if (cep.length !== 8 || validator.isEmpty(cep)) {
        return false;
    } else {
        return true
    }
}
export function checkSite(site) {
    return ((/^(ftp|http|https):\/\/[^ "]+$/.test(site) || validator.isEmpty(site) ? true : false));
}
export function checkCategoria(categoria) {
    return !validator.isEmpty(categoria)
}
export function checkDescricao(descricao) {
    if ((validator.isEmpty(descricao)) || (descricao.length < 40)) {
        return false
    } else {
        return true
    }
}

export function checkForm(nome, cpf, email, data, cep, cidade, estado, senha) {
    return ([checkNome(nome), checkCPF(cpf), checkEmail(email), checkData(data), checkCep(cep), checkCidade(cidade), checkEstado(estado), checkSenha(senha)])
}
export function checkFormBusiness(nome, categoria, cnpj, cep, cidade, estado, email, senha, site) {
    return ([checkNome(nome), checkCNPJ(cnpj), checkEmail(email), checkSenha(senha), checkCategoria(categoria), checkCidade(cidade), checkEstado(estado), checkCep(cep), checkSite(site)])
}
export function checkLogin(email, senha) {
    return ([checkEmail(email), checkSenha(senha)])
}

export function checkFormCompaint(titulo, descricao, categoria) {
    return ([checkTitulo(titulo), checkDescricao(descricao), checkCategoria(categoria)])
}

export function newData(date) {

    const data = new Date(date)

    const dia = ('0' + data.getDate()).slice(-2)
    const mes = ('0' + (data.getMonth() + 1)).slice(-2)
    const ano = data.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`

    return dataFormatada

}

export function statusColor(status) {

    if (status == "Aguardando") {
        return ('#212121');
    } else if (status == "Não Respondida") {
        return ('#CE0000');
    } else if (status == "Respondida") {
        return ('#00A11A');
    } else if (status == "Resolvido") {
        return ("#00A11A");
    } else {
        return ('#CE0000');
    }
}

export function statusBackground(status) {
    if (status == "Aguardando") {
        return ('#E0E0E0');
    } else if (status == "Não Respondida") {
        return ('#F1DDDD');
    } else if (status == "Respondida") {
        return ('#DDEDDF');
    } else if (status == "Resolvido") {
        return ('#DDEDDF');
    } else {
        return ('#F1DDDD');
    };
};