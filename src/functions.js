export function calcularNumeroExpressao(nomeCompleto) {
    const tabelaNumeros = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    nomeCompleto = nomeCompleto.normalize("NFD").toUpperCase().replace(/\s/g, "");
    let numeroExpressao = 0;

    for (let i = 0; i < nomeCompleto.length; i++) {
        const letra = nomeCompleto[i];
        if (tabelaNumeros.hasOwnProperty(letra)) {
            numeroExpressao += tabelaNumeros[letra];
        }
    }

    while (numeroExpressao > 9) {
        numeroExpressao = [...numeroExpressao.toString()].map(Number).reduce((a, b) => a + b);
    }

    return numeroExpressao;
}

export function calcularNumeroAlma(primeiroNome) {
    const tabelaNumeros = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    primeiroNome = primeiroNome.toUpperCase();
    let numeroAlma = 0;

    for (let i = 0; i < primeiroNome.length; i++) {
        const letra = primeiroNome[i];
        if (tabelaNumeros.hasOwnProperty(letra)) {
            numeroAlma += tabelaNumeros[letra];
        }
    }

    while (numeroAlma > 9) {
        numeroAlma = [...numeroAlma.toString()].map(Number).reduce((a, b) => a + b);
    }

    return numeroAlma;
}

export function calcularNumeroDestino(dataNascimento) {
    const numerosData = dataNascimento.match(/\d/g);
    const numeroDestino = numerosData.reduce((acc, curr) => acc + parseInt(curr), 0);

    if (numeroDestino <= 9) {
        return numeroDestino;
    } else {
        return calcularNumeroDestino(numeroDestino.toString());
    }
}

export function writeDescription(numero){
    var description = "";
    switch (numero) {
        case 1:
            description = "O número 1 representa liderança, independência, originalidade e iniciativa. Pessoas com esse número tendem a ser empreendedoras, assertivas e confiantes. Elas têm a capacidade de serem pioneiras em seus campos e inspirar os outros.";
            break;
        case 2:
            description = "O número 2 representa cooperação, adaptabilidade, consideração e equilíbrio. Pessoas com esse número tendem a ser diplomáticas, atenciosas e amigáveis. Elas têm a capacidade de ver os dois lados de uma situação e trabalhar com pessoas de diferentes origens.";
            break;
        case 3:
            description = "O número 3 representa expressão, entusiasmo, otimismo e criatividade. Pessoas com esse número tendem a ser otimistas, criativas e inspiradoras. Elas têm a capacidade de se comunicar de forma clara e criativa, e de inspirar e motivar os outros com sua voz.";
            break;
        case 4:
            description = "O número 4 representa trabalho duro, confiabilidade, praticidade e construção. Pessoas com esse número tendem a ser trabalhadoras, confiáveis e práticas. Elas têm a capacidade de se concentrar em uma tarefa e construir algo de valor duradouro.";
            break;
        case 5:
            description = "O número 5 representa liberdade, aventura, curiosidade e inteligência. Pessoas com esse número tendem a ser versáteis, aventureiras e inteligentes. Elas têm a capacidade de se adaptar a qualquer situação e de pensar em seus pés.";
            break;
        case 6:
            description ="O número 6 representa amor, responsabilidade, compaixão e compreensão. Pessoas com esse número tendem a ser compassivas, amorosas e responsáveis. Elas têm a capacidade de nutrir e apoiar os outros, e de criar harmonia em seu ambiente.";
            break;
        case 7:
            description= "O número 7 representa sabedoria, espiritualidade, introspecção e análise. Pessoas com esse número tendem a ser sábias, espirituais e intuitivas. Elas têm a capacidade de ver o quadro geral e de se conectar com o mundo espiritual.";
            break;
        case 8:
            description = "O número 8 representa poder, autoridade, sucesso e abundância. Pessoas com esse número tendem a ser ambiciosas, confiantes e organizadas. Elas têm a capacidade de manifestar seus sonhos e alcançar o sucesso material.";
            break;
        case 9:
            description ="O número 9 representa humanitarismo, compaixão, generosidade e idealismo. Pessoas com esse número tendem a ser compassivas, generosas e idealistas. Elas têm a capacidade de ver o quadro geral e de se conectar com o mundo espiritual.";
            break;
        case 11:
            description = "O número 11 representa intuição, idealismo, iluminação e sensibilidade. Pessoas com esse número tendem a ser intuitivas, idealistas e sensíveis. Elas têm a capacidade de se conectar com o mundo espiritual e de inspirar os outros.";
            break;
        case 22:
            description = "O número 22 representa mestria, pragmatismo, construção e evolução. Pessoas com esse número tendem a ser práticas, trabalhadoras e confiáveis. Elas têm a capacidade de construir algo de valor duradouro e de transformar seus sonhos em realidade.";
            break;
        default:
            break;
        };
    return description;
}