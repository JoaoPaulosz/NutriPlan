var alimentosCadastrados = ["Arroz", "Feijão", "Frango", "Vegetais", "Peixe"];

// Função para popular o dropdown com os alimentos cadastrados
function popularDropdown() {
    var alimentosDropdown = document.getElementById('alimentos');

    // Limpar opções existentes
    alimentosDropdown.innerHTML = '';

    // Adicionar opções
    alimentosCadastrados.forEach(function(alimento) {
        var option = document.createElement('option');
        option.value = alimento;
        option.text = alimento;
        alimentosDropdown.appendChild(option);
    });
}

// Chamar a função para popular o dropdown ao carregar a página
export const cadastroAlimento = {
    popularDropdown
}