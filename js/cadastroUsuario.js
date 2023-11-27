import { conexaoApi } from "./conexaoApi.js";


const emailCadastro = document.getElementById('email');
const nomeCadastro = document.getElementById('nome');
const senhaCadastro = document.getElementById('senha');


const btnCadastrar = document.getElementById('btnCadastrar')
btnCadastrar.addEventListener('click', () => {
    cadastrarUsuario();
})


async function cadastrarUsuario() {
    let conexaoConvertida = await conexaoApi.cadastroUsuario(emailCadastro.value, senhaCadastro.value, nomeCadastro.value);
    if(conexaoConvertida != false){
        window.location.href = "../pages/cadastro_concluido.html"
        let parametrosUrl = new URLSearchParams(window.location.search);
        parametrosUrl.set("id", conexaoConvertida.usuario_id);
    }else{
        window.location.href = '../index.html'
        let parametrosUrl = new URLSearchParams(window.location.search);
        parametrosUrl.set("id", "1");
    }

}