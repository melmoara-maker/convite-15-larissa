document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("botaoAbrir");

    if (!botao) return;

    botao.addEventListener("click", () => {

        alert("Bem-vindo ao convite da Larissa! ✨\n\nEm breve esta tela abrirá o restante do convite.");

    });

});
