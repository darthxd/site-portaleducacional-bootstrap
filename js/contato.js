// Validação do formulário de contato

// Definindo as constantes a serem utilizadas

const forms = document.querySelectorAll('.needs-validation') // Todos os forms que precisam de validação

const inputEmail = document.getElementById('input-email'); // Inputs do tipo e-mail, que precisam conter o caractere @
const emailFeedback = document.getElementById('input-emailFeedback'); // Feedback das inputs e-mail

inputEmail.addEventListener('input', () => {    // Evento que acontece ao inserir na input e-mail, verifica se o e-mail contem ou não o caractere @
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

