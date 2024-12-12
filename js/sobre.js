// Alterar o estado de ativado dos botões da barra lateral

// Definindo as constantes a serem utilizadas
const sobreItems = document.querySelectorAll('.sobre-item'); // Lista com todos os links da barra lateral

window.onhashchange = (change) => { // Evento ativado quando a localização da página muda
    sobreItems.forEach(item => { // Função para cada link da barra lateral
        if(change.newURL === item.href) { // Se a localização da página for igual a href do link, ele será ativado
            item.classList.add('active', 'text-light')
            item.classList.remove('link-body-emphasis')
        } else { // Se a localização da página for diferente a href do link, ele será desativado
            item.classList.add('link-body-emphasis')
            item.classList.remove('active', 'text-light')
        }
    })
}