const dictionaryData = [
    { file: "10_белый.wav", chulym: "ақпус", tr: "aqpús", ru: "белый" },
    { file: "542_большой.wav", chulym: "улуғ", tr: "ulúʁ", ru: "большой" },
    { file: "16_ветер.wav", chulym: "чӓл", tr: "ʨɛl", ru: "ветер" },
    { file: "279_ночь.wav", chulym: "иир", tr: "i:r", ru: "вечер; ночь" },
    { file: "24_смотри.wav", chulym: "кӧр", tr: "kør", ru: "видеть, смотреть" },
    { file: "6_вода.wav", chulym: "сууғ", tr: "suʁ", ru: "вода; дождь" },
    { file: "309_вошь.wav", chulym: "пит", tr: "pit", ru: "вошь" },
    { file: "55_год.wav", chulym: "чӧл", tr: "ʨəl", ru: "год" },
    { file: "927_дым.wav", chulym: "тудун", tr: "tydún", ru: "дым" },
    { file: "20_дай.wav", chulym: "пер", tr: "pɛr", ru: "давать" },
    { file: "390_далеко.wav", chulym: "арақ", tr: "ərάq", ru: "далеко" },
    { file: "12_два.wav", chulym: "игӓ", tr: "ígə", ru: "два" },
    { file: "81_дерево.wav", chulym: "ағаш", tr: "aʁáɕ", ru: "дерево" },
    { file: "1142_длинный.wav", chulym: "узун", tr: "uzún", ru: "длинный" },
    { file: "155_дорога.wav", chulym: "чоол", tr: "ʨo:l", ru: "дорога" },
    { file: "443_хороший.wav", chulym: "чахшы", tr: "ʨaχʃə́", ru: "хороший" },
    { file: "81_ешь.wav", chulym: "чи", tr: "ʨi", ru: "есть (ешь)" },
    { file: "1099_желтый.wav", chulym: "сарығ", tr: "sárəʁ", ru: "жёлтый" },
    { file: "184_жги.wav", chulym: "ӧртӓ", tr: "ørtɛ́", ru: "жечь, сжечь" },
    { file: "647_живот.wav", chulym: "қурсақ", tr: "qursáq", ru: "живот" },
    { file: "346_жир.wav", chulym: "чағ", tr: "ʨaʁ", ru: "жир" },
    { file: "536_звезда.wav", chulym: "чылдыс", tr: "ʨəldə́s", ru: "звезда" },
    { file: "218_зеленый.wav", chulym: "кӧк", tr: "køk", ru: "зелёный" },
    { file: "296_земля.wav", chulym: "чӓр", tr: "ʨɛr", ru: "земля; камень" },
    { file: "346_знай.wav", chulym: "пӧл", tr: "pəl", ru: "знать" },
    { file: "763_иди.wav", chulym: "пар", tr: "par", ru: "идти" },
    { file: "577_имя.wav", chulym: "ат", tr: "at", ru: "имя" },
    { file: "1127_колено.wav", chulym: "таш-паажа", tr: "taʃ-pá:ʒə", ru: "колено" },
    { file: "1022_кость.wav", chulym: "сӧк", tr: "søk", ru: "кость" },
    { file: "836_красный.wav", chulym: "қызыл", tr: "qəzə́l", ru: "красный" },
    { file: "188_круглый (но знач. не знает).wav", chulym: "тумақ", tr: "tumáq", ru: "круглый" },
    { file: "104_лежи.wav", chulym: "чат", tr: "ʨat", ru: "лежать" },
    { file: "360_лети.wav", chulym: "уч", tr: "utɕ", ru: "лететь, летать" },
    { file: "322_маленький.wav", chulym: "кетӓӓтӓ", tr: "kɛtɛ́:tɛ", ru: "маленький (Вар. 1)" },
    { file: "445_маленький.wav", chulym: "пеличӓк", tr: "pelítɕɛk", ru: "маленький (Вар. 2)" },
    { file: "71_много.wav", chulym: "ӓтӓтӓғ", tr: "ətɛtəʁ", ru: "много (Вар. 1)" },
    { file: "228_много.wav", chulym: "кӧп", tr: "køp", ru: "много (Вар. 2)" },
    { file: "366_мой.wav", chulym: "мең", tr: "meŋ", ru: "мой" },
    { file: "462_мы.wav", chulym: "пӓс", tr: "pəs", ru: "мы" },
    { file: "344_мясо.wav", chulym: "эт", tr: "ɛt", ru: "мясо" },
    { file: "788_новый.wav", chulym: "чаай", tr: "ʨa:j", ru: "новый" },
    { file: "752_ноготь.wav", chulym: "тырғақ", tr: "tərŋáq", ru: "ноготь" },
    { file: "204_огонь.wav", chulym: "от", tr: "ot", ru: "огонь" },
    { file: "88_песок.wav", chulym: "қум", tr: "qum", ru: "песок" },
    { file: "277_пей.wav", chulym: "ич", tr: "itɕ", ru: "пить" },
    { file: "22_птица.wav", chulym: "қуш", tr: "quʃ", ru: "птица" },
    { file: "560_рог.wav", chulym: "мыс", tr: "mys", ru: "рог" },
    { file: "306_рыба порч..wav", chulym: "палық", tr: "páləq", ru: "рыба" },
    { file: "331_сидеть.wav", chulym: "олтураяға", tr: "ol:urajʁá", ru: "сидеть" },
    { file: "690_собака.wav", chulym: "адай", tr: "adáj", ru: "собака" },
    { file: "269_солнце.wav", chulym: "кун-қараға", tr: "kun-qaráʁa", ru: "солнце" },
    { file: "1066_теплый.wav", chulym: "чӧлығ", tr: "ʨələ́ʁ", ru: "тёплый" }
];

const gridContainer = document.getElementById('dictionary-grid');

dictionaryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const icon = `<svg class="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

    card.innerHTML = `
        <div class="chulym-word">${item.chulym}</div>
        <div class="transcription">[${item.tr}]</div>
        <div class="russian-word">${item.ru}</div>
        ${icon}
    `;

    let audio = new Audio(item.file);

    card.addEventListener('click', () => {
        document.querySelectorAll('audio').forEach(a => {
            a.pause();
            a.currentTime = 0;
        });
        document.querySelectorAll('.card').forEach(c => c.classList.remove('playing'));

        audio.currentTime = 0;
        audio.play();
        card.classList.add('playing');

        audio.onended = () => {
            card.classList.remove('playing');
        };
    });

    gridContainer.appendChild(card);
});