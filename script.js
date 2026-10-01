const botoes = document.querySelectorAll(".botao");
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botao.style.transform = "scale(0.95)";
        setTimeout(function() {
            botao.style.transform = "scale(1)";

        }, 100);
    });
});