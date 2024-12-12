// Tema claro / escuro

// Definindo as constantes a serem utilizadas
const themeBtn = document.getElementById('theme-button');   // Botão que ativa o dropdown para mudança de tema
const themeOptions = document.querySelectorAll('.theme-option'); // Lista que contem os botões de tema "claro" e "escuro"

// Adicionando enventos em cada um dos botões de tema (claro e escuro)
themeOptions.forEach(option => {
    option.addEventListener('click', () => {changeTheme(option.id)})    // Adicionando o evento "click" para cada um dos botões
})

// Criando a função changeTheme, que controla o tema da página (claro ou escuro)
function changeTheme(theme) {  // O parâmetro necessário é o valor do tema (light / dark)

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





// Validação do formulário de contato


// Definindo as constantes a serem utilizadas

const forms = document.querySelectorAll('.needs-validation')

const inputEmail = document.getElementById('input-email');
const emailFeedback = document.getElementById('input-emailFeedback');

inputEmail.addEventListener('input', () => {
    if(inputEmail.value === '') {
        emailFeedback.innerHTML = 'O campo e-mail não pode estar vazio.'
    } else if(!inputEmail.value.includes('@')){
        emailFeedback.innerHTML = 'Insira um e-mail válido.'
    }
})

// Validação pelo bootstrap
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }, false)
})