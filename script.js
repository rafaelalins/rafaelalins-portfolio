
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-vertical li");
    const infoText = document.getElementById("info-text");

    // Textos explicativos para cada menu
    const textos = {
        "Curso Técnico": "Formada em Controle de Tráfego Aéreo pela EEAR (Escola de Especialistas de Aeronáutica), em 2022.",
        "Faculdade": "Graduanda de Análise e Desenvolvimento de Sistemas na UNINTER, atualmente finalizando o 1º período. Estudando Python, Javascript, HTML, CSS no momento.",
        "Idiomas":"Certificado de Proficiência em Inglês da English Live: C2 79/100."
    };

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const info = item.getAttribute("data-info"); 
            infoText.textContent = textos[info]; // Atualiza o texto ao lado
        });
    });
});



