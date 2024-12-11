// Criação das constantes do DOM
const themeBtn = document.getElementById('themeBtn');   // Botão que ativa o dropdown para mudança de tema
const themeOptions = document.querySelectorAll('.themeOption'); // Lista que contem os botões de tema "claro" e "escuro"

// Adicionando enventos em cada um dos botões de tema (claro e escuro)
for(let [i, option] of themeOptions.entries()){
   option.addEventListener('click', () => {changeTheme(option.id,option.text)})    // Adicionando o evento "click" para cada um dos botões
}

// Criando a função changeTheme, que controla o tema da página (claro ou escuro)
function changeTheme(theme,text) {  // Os parâmetros necessários são o valor do tema (light / dark) e o nome do tema (Claro / Escuro). Ambos são selecionados do elemento HTML

    document.documentElement.setAttribute('data-bs-theme',theme);   // Alterando o tema da página para o tema selecionado
    localStorage.setItem('theme',theme);    // Salvando no armazenamento local uma variável para guardar o tema selecionado
    
    themeOptions.forEach(option => {    // Alterando o estado de "ativo" nos botões de tema Claro e Escuro
        if(theme === option.id){
            option.classList.add('active')
            themeBtn.innerHTML = option.innerHTML;
        } else {
            option.classList.remove('active');
        }
    });
    
}

// Função que mantem o tema selecionado quando o usuário trocar de página
window.onload = () => {

    let theme = localStorage.getItem('theme');  // Variável que pega o valor do tema guardado no armazenamento local
    document.documentElement.setAttribute('data-bs-theme',theme);   // Alterando o tema da página para o tema guardado no armazenamento local

    themeOptions.forEach(option => {    // Alterando o estado de "ativo" nos botões de tema Claro e Escuro
        if(theme === option.id){
            option.classList.add('active')
            themeBtn.innerHTML = option.innerHTML;
        } else {
            option.classList.remove('active');
        }
    });
}