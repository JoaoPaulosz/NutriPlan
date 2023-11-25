import { conexaoApi } from "./conexaoApi.js";


const emailCadastro = document.getElementById('email');
const nomeCadastro = document.getElementById('nome');
const senhaCadastro = document.getElementById('senha');


const btnCadastrar = document.getElementById('btnCadastrar')
btnCadastrar.addEventListener('click', () => {
    cadastrarUsuario();
})


async function cadastrarUsuario(){
    conexaoApi.cadastroUsuario(emailCadastro.value,senhaCadastro.value,nomeCadastro.value)
    window.location.href = '../pages/cadastro_concluido.html'
}