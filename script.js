// Selecionar todos os links com a classe 'link'
const links = document.querySelectorAll("a.link");

// Função para adicionar animação de clique em botões
function addClickAnimation() {
    const buttons = document.querySelectorAll(".botoes-links .link button, footer .btn-footer");
    
    buttons.forEach(button => {
        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.9)";
        });
        
        button.addEventListener("mouseup", () => {
            button.style.transform = "scale(1)";
            button.style.transition = "transform 0.2s";
        });
        
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
}

// Mensagem de boas-vindas no console
function showWelcomeMessage() {
    console.log("Bem-vindo ao site Ribeiro Links! Explore e clique nos links abaixo.");
}

// Adicionando tooltip dinâmico nos links
function addDynamicTooltips() {
    const links = document.querySelectorAll("a.link, footer a.btn-footer");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            const tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.textContent = `Acesse: ${link.href}`;
            tooltip.style.position = "absolute";
            tooltip.style.color = "#fff";
            tooltip.style.background = "rgba(0, 0, 0, 0.8)";
            tooltip.style.padding = "5px 10px";
            tooltip.style.borderRadius = "5px";
            tooltip.style.fontSize = "0.9em";
            tooltip.style.top = `${link.getBoundingClientRect().top - 30}px`;
            tooltip.style.left = `${link.getBoundingClientRect().left}px`;
            tooltip.style.zIndex = "1000";
            document.body.appendChild(tooltip);

            link.addEventListener("mouseleave", () => {
                document.body.removeChild(tooltip);
            });
        });
    });
}

// Inicializar as funcionalidades ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showWelcomeMessage();
    addClickAnimation();
    addDynamicTooltips();
});
