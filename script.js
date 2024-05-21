const states = [
    { name: "Acre", flag: "imagens/Bandeira_do_Acre.svg" },
    { name: "Alagoas", flag: "imagens/Bandeira_de_Alagoas.svg" },
    { name: "Amapá", flag: "imagens/Bandeira_do_Amapá.svg" },
    { name: "Amazonas", flag: "imagens/Bandeira_do_Amazonas.svg" },
    { name: "Bahia", flag: "imagens/Bandeira_da_Bahia.svg" },
    { name: "Ceará", flag: "imagens/Bandeira_do_Ceará.svg" },
    { name: "Distrito Federal", flag: "imagens/Bandeira_do_Distrito_Federal.svg" },
    { name: "Espírito Santo", flag: "imagens/Bandeira_do_Esp%C3%ADrito_Santo.svg" },
    { name: "Goiás", flag: "imagens/Bandeira_de_Goias.svg" },
    { name: "Maranhão", flag: "imagens/Bandeira_do_Maranh%C3%A3o.svg" },
    { name: "Mato Grosso", flag: "imagens/Bandeira_de_Mato_Grosso.svg" },
    { name: "Mato Grosso do Sul", flag: "imagens/Bandeira_de_Mato_Grosso_do_Sul.svg" },
    { name: "Minas Gerais", flag: "imagens/Bandeira_de_Minas_Gerais.svg" },
    { name: "Pará", flag: "imagens/Bandeira_do_Par%C3%A1.svg" },
    { name: "Paraíba", flag: "imagens/Bandeira_da_Para%C3%ADba.svg" },
    { name: "Paraná", flag: "imagens/Bandeira_do_Paran%C3%A1.svg" },
    { name: "Pernambuco", flag: "imagens/Bandeira_de_Pernambuco.svg" },
    { name: "Piauí", flag: "imagens/Bandeira_do_Piau%C3%AD.svg" },
    { name: "Rio de Janeiro", flag: "imagens/Bandeira_do_estado_do_Rio_de_Janeiro.svg" },
    { name: "Rio Grande do Norte", flag: "imagens/Bandeira_do_Rio_Grande_do_Norte.svg" },
    { name: "Rio Grande do Sul", flag: "imagens/Bandeira_do_Rio_Grande_do_Sul.svg" },
    { name: "Rondônia", flag: "imagens/Bandeira_de_Rond%C3%B4nia.svg" },
    { name: "Roraima", flag: "imagens/Bandeira_de_Roraima.svg" },
    { name: "Santa Catarina", flag: "imagens/Bandeira_de_Santa_Catarina.svg" },
    { name: "São Paulo", flag: "imagens/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg" },
    { name: "Sergipe", flag: "imagens/Bandeira_de_Sergipe.svg" },
    { name: "Tocantins", flag: "imagens/Bandeira_do_Tocantins.svg" }
];

let score = 0;
let currentStateIndex;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadNewFlag() {
    currentStateIndex = Math.floor(Math.random() * states.length);
    document.getElementById('flag').src = states[currentStateIndex].flag;
    loadOptions();
}

function loadOptions() {
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    const correctOption = states[currentStateIndex].name;
    const allOptions = [correctOption];

    while (allOptions.length < 4) {
        const randomState = states[Math.floor(Math.random() * states.length)].name;
        if (!allOptions.includes(randomState)) {
            allOptions.push(randomState);
        }
    }

    shuffleArray(allOptions);

    allOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.className = 'button';
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === states[currentStateIndex].name) {
        score++;
    } else {
        score = 0;
    }
    document.getElementById('score').innerText = `Pontuação: ${score}`;
    loadNewFlag();
}

document.addEventListener('DOMContentLoaded', loadNewFlag);