const dictionaryData = [
    { file: "10_белый.wav", chulym: "а<b>қ</b>пус", tr: "a<b>q</b>pús", ru: "белый" },
    { file: "542_большой.wav", chulym: "улу<b>ғ</b>", tr: "ulú<b>ʁ</b>", ru: "большой" },
    { file: "16_ветер.wav", chulym: "ч<b>ӓ</b>л", tr: "<b>ʨɛ</b>l", ru: "ветер" },
    { file: "279_ночь.wav", chulym: "иир", tr: "i:r", ru: "вечер; ночь" },
    { file: "24_смотри.wav", chulym: "к<b>ӧ</b>р", tr: "k<b>ø</b>r", ru: "видеть, смотреть" },
    { file: "6_вода.wav", chulym: "суу<b>ғ</b>", tr: "su<b>ʁ</b>", ru: "вода; дождь" },
    { file: "309_вошь.wav", chulym: "пит", tr: "pit", ru: "вошь" },
    { file: "55_год.wav", chulym: "ч<b>ӧ</b>л", tr: "<b>ʨə</b>l", ru: "год" },
    { file: "927_дым.wav", chulym: "тудун", tr: "tydún", ru: "дым" },
    { file: "20_дай.wav", chulym: "пер", tr: "p<b>ɛ</b>r", ru: "давать" },
    { file: "390_далеко.wav", chulym: "ара<b>қ</b>", tr: "<b>ə</b>rά<b>q</b>", ru: "далеко" },
    { file: "12_два.wav", chulym: "иг<b>ӓ</b>", tr: "íg<b>ə</b>", ru: "два" },
    { file: "81_дерево.wav", chulym: "а<b>ғ</b>аш", tr: "a<b>ʁ</b>á<b>ɕ</b>", ru: "дерево" },
    { file: "1142_длинный.wav", chulym: "узун", tr: "uzún", ru: "длинный" },
    { file: "155_дорога.wav", chulym: "чоол", tr: "<b>ʨ</b>o:l", ru: "дорога" },
    { file: "443_хороший.wav", chulym: "чахшы", tr: "<b>ʨ</b>aχ<b>ʃ</b><b>ə</b>́", ru: "хороший" },
    { file: "81_ешь.wav", chulym: "чи", tr: "<b>ʨ</b>i", ru: "есть (ешь)" },
    { file: "1099_желтый.wav", chulym: "сары<b>ғ</b>", tr: "sár<b>ə</b><b>ʁ</b>", ru: "жёлтый" },
    { file: "184_жги.wav", chulym: "<b>ӧ</b>рт<b>ӓ</b>", tr: "<b>ø</b>rt<b>ɛ</b>́", ru: "жечь, сжечь" },
    { file: "647_живот.wav", chulym: "<b>қ</b>урса<b>қ</b>", tr: "<b>q</b>ursá<b>q</b>", ru: "живот" },
    { file: "346_жир.wav", chulym: "ча<b>ғ</b>", tr: "<b>ʨ</b>a<b>ʁ</b>", ru: "жир" },
    { file: "536_звезда.wav", chulym: "чылдыс", tr: "<b>ʨə</b>ld<b>ə</b>́s", ru: "звезда" },
    { file: "218_зеленый.wav", chulym: "к<b>ӧ</b>к", tr: "k<b>ø</b>k", ru: "зелёный" },
    { file: "296_земля.wav", chulym: "ч<b>ӓ</b>р", tr: "<b>ʨɛ</b>r", ru: "земля; камень" },
    { file: "346_знай.wav", chulym: "п<b>ӧ</b>л", tr: "p<b>ə</b>l", ru: "знать" },
    { file: "763_иди.wav", chulym: "пар", tr: "par", ru: "идти" },
    { file: "577_имя.wav", chulym: "ат", tr: "at", ru: "имя" },
    { file: "1127_колено.wav", chulym: "таш-паажа", tr: "ta<b>ʃ</b>-pá:<b>ʒə</b>", ru: "колено" },
    { file: "1022_кость.wav", chulym: "с<b>ӧ</b>к", tr: "s<b>ø</b>k", ru: "кость" },
    { file: "836_красный.wav", chulym: "<b>қ</b>ызыл", tr: "<b>qə</b>z<b>ə</b>́l", ru: "красный" },
    { file: "188_круглый (но знач. не знает).wav", chulym: "тума<b>қ</b>", tr: "tumá<b>q</b>", ru: "круглый" },
    { file: "104_лежи.wav", chulym: "чат", tr: "<b>ʨ</b>at", ru: "лежать" },
    { file: "360_лети.wav", chulym: "уч", tr: "ut<b>ɕ</b>", ru: "лететь, летать" },
    { file: "322_маленький.wav", chulym: "кичэ<b>ӵ</b>", tr: "kit<b>ɕɛtɕ</b>", ru: "маленький (Вар. 1)" },
    { file: "445_маленький.wav", chulym: "пелич<b>ӓ</b>к", tr: "pelít<b>ɕɛ</b>k", ru: "маленький (Вар. 2)" },
    { file: "71_много.wav", chulym: "а<b>ӵ</b>тыл", tr: "at<b>ɕ</b><b>ə</b>l", ru: "много (Вар. 1)" },
    { file: "228_много.wav", chulym: "к<b>ӧ</b>п", tr: "k<b>ø</b>p", ru: "много (Вар. 2)" },
    { file: "366_мой.wav", chulym: "ме<b>ң</b>", tr: "me<b>ŋ</b>", ru: "мой" },
    { file: "462_мы.wav", chulym: "п<b>ӓ</b>с", tr: "p<b>ə</b>s", ru: "мы" },
    { file: "344_мясо.wav", chulym: "эт", tr: "<b>ɛ</b>t", ru: "мясо" },
    { file: "788_новый.wav", chulym: "чаай", tr: "<b>ʨ</b>a:j", ru: "новый" },
    { file: "752_ноготь.wav", chulym: "тыр<b>ғ</b>а<b>қ</b>", tr: "t<b>ə</b>r<b>ŋ</b>á<b>q</b>", ru: "ноготь" },
    { file: "204_огонь.wav", chulym: "от", tr: "ot", ru: "огонь" },
    { file: "88_песок.wav", chulym: "<b>қ</b>ум", tr: "<b>q</b>um", ru: "песок" },
    { file: "277_пей.wav", chulym: "ич", tr: "it<b>ɕ</b>", ru: "пить" },
    { file: "22_птица.wav", chulym: "<b>қ</b>уш", tr: "<b>q</b>u<b>ʃ</b>", ru: "птица" },
    { file: "560_рог.wav", chulym: "мыс", tr: "mys", ru: "рог" },
    { file: "306_рыба порч..wav", chulym: "палы<b>қ</b>", tr: "pál<b>ə</b><b>q</b>", ru: "рыба" },
    { file: "331_сидеть.wav", chulym: "олтурая<b>ғ</b>а", tr: "ol:uraj<b>ʁ</b>á", ru: "сидеть" },
    { file: "690_собака.wav", chulym: "адай", tr: "adáj", ru: "собака" },
    { file: "269_солнце.wav", chulym: "кун-<b>қ</b>ара<b>ғ</b>а", tr: "kun-<b>q</b>ará<b>ʁ</b>a", ru: "солнце" },
    { file: "1066_теплый.wav", chulym: "ч<b>ӧ</b>лы<b>ғ</b>", tr: "<b>ʨə</b>l<b>ə</b>́<b>ʁ</b>", ru: "тёплый" }
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