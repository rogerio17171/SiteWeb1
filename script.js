document.addEventListener("DOMContentLoaded", function() {

    const botaoTema = document.getElementById("toggleTema");
    const contador = document.getElementById("contadorCarrinho");
    const botaoCarrinho = document.getElementById("botaoCarrinho");

    let totalItens = 0;

    // =========================
    // MODO ESCURO
    // =========================
    if(localStorage.getItem("modo-invertido") === "true"){
        document.body.classList.add("modo-invertido");
        botaoTema.textContent = "☀️";
    }

    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("modo-invertido");

        const ativo = document.body.classList.contains("modo-invertido");
        botaoTema.textContent = ativo ? "☀️" : "🌙";

        localStorage.setItem("modo-invertido", ativo);
    });

    // =========================
    // ADICIONAR ITEM
    // =========================
    document.querySelectorAll(".btn-add").forEach(botao => {
        botao.addEventListener("click", () => {
            totalItens++;
            contador.innerText = totalItens;
        });
    });

    // =========================
    // REMOVER ITEM
    // =========================
    document.querySelectorAll(".btn-remove").forEach(botao => {
        botao.addEventListener("click", () => {
            if (totalItens > 0) {
                totalItens--;
                contador.innerText = totalItens;
            }
        });
    });

    // =========================
    // ABRIR CARRINHO
    // =========================
    botaoCarrinho.addEventListener("click", () => {
        alert(`Você tem ${totalItens} item(s) no carrinho!`);
    });

});

// =========================
// MODAIS
// =========================
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}