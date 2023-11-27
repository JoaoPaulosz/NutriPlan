import { cadastroAlimento } from "./cadastroAlimentos.js"

const cadastroAlimentoPage = document.getElementById('cadastroAlimento')
const conteiner = document.getElementById('conteiner')
const cadastroRefeicaoPage = document.getElementById('cadastroRefeicao')
const cadastroReceitaPage = document.getElementById('cadastroReceita')

cadastroAlimentoPage.addEventListener('click', () => {
    conteiner.innerHTML = " <section id='cadastroAlimento'>" +
    "<h2>Cadastrar Alimento</h2>" + 
    "<form>" +
        "<label for='nomeAlimento'>Nome do Alimento:</label>" +
        "<input type='text' id='nomeAlimento' name='nomeAlimento' required>" +        
        "<button type='submit'>Cadastrar Alimento</button>"+
    "</form>"+
"</section>"
})

cadastroRefeicaoPage.addEventListener('click', () => {
    conteiner.innerHTML =      `<form>
    <!-- Campos do formulário -->
    <label for="nomeRefeicao">Nome da Refeição:</label>
    <input type="text" id="nomeRefeicao" name="nomeRefeicao" required>
    
    <label for="receitas">Receitas:</label>
    <textarea id="receitas" name="receitas" required></textarea>
    
    <!-- Botão de envio do formulário -->
    <button type="submit">Cadastrar Refeição</button>
</form>`
})

cadastroReceitaPage.addEventListener('click', () => {
    conteiner.innerHTML =          `  <section id="formReceita">
    <h2>Cadastro de Receita</h2>
    <form>
        <label for="nomeReceita">Nome da Receita:</label>
        <input type="text" id="nomeReceita" name="nomeReceita" required>

        <label for="alimentos">Selecione os Alimentos:</label>
        <select id="alimentos" name="alimentos" multiple>
            <!-- Opções serão adicionadas dinamicamente com JavaScript -->
        </select>

        <button type="submit">Cadastrar Receita</button>
    </form>
</section>`;
cadastroAlimento.popularDropdown()
})

function selectNavItem(element) {
    var navItems = document.querySelectorAll('.navbar a');
    navItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    element.classList.add('selected');
    closeMenu();
}

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');

    navbar.style.width = (navbar.style.width === '200px' || navbar.style.width === '') ? '60px' : '200px';
    content.style.marginLeft = (navbar.style.width === '200px') ? '200px' : '60px';
}

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');

    navbar.style.width = '60px';
    content.style.marginLeft = '60px';
}
