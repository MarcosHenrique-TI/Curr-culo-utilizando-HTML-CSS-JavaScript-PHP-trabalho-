const botaoTema = document.getElementById('theme-toggle');
const body = document.body;

botaoTema.addEventListener('click', () => {
    body.classList.toggle('lighttheme');

    if (body.classList.contains('lighttheme')) {
        botaoTema.textContent = 'Modo Escuro';
    } else {
        botaoTema.textContent = 'Modo Claro';
    }
    const downloadBtn = document.getElementById("download-cv");

downloadBtn.addEventListener("click", () => {

});
});