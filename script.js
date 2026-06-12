const botaoTema = document.getElementById('theme-toggle');
const body = document.body;

botaoTema.addEventListener('click', () => {
    body.classList.toggle('lighttheme');

    if (body.classList.contains('lighttheme')) {
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});