const messages = [
    "Esti sigura?",
    "Foarte sigura??",
    "Te rog?",
    "Hai maaaa...",
    "Mai gandestete!",
    "Daca vei zice nu, voi fi suparat rau...",
    "Foarte...",
    "Foarte foarte foarte dar foarte suparat...",
    "Bine, ma voi opri din a te intreba...",
    "Doar glumeam, spune da te rog! ❤️"
];

let messageIndex = 0;

function handleNuClick() {
    const nuButton = document.querySelector('.nu-button');
    const daButton = document.querySelector('.da-button');
    nuButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(daButton).fontSize);
    daButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleDaClick() {
    window.location.href = "da_page.html";
}