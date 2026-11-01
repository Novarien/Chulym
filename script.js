const dictionaryData = [
    { file: "10_белый.wav", chulym: "а<span class='special-char'>қ</span>пус", tr: "a<span class='special-char'>q</span>pús", ru: "белый" },
    { file: "542_большой.wav", chulym: "улу<span class='special-char'>ғ</span>", tr: "ulú<span class='special-char'>ʁ</span>", ru: "большой" },
    { file: "16_ветер.wav", chulym: "ч<span class='special-char'>ӓ</span>л", tr: "<span class='special-char'>ʨɛ</span>l", ru: "ветер" },
    { file: "279_ночь.wav", chulym: "иир", tr: "i:r", ru: "вечер; ночь" },
    { file: "24_смотри.wav", chulym: "к<span class='special-char'>ӧ</span>р", tr: "k<span class='special-char'>ø</span>r", ru: "видеть, смотреть" },
    { file: "6_вода.wav", chulym: "суу<span class='special-char'>ғ</span>", tr: "su<span class='special-char'>ʁ</span>", ru: "вода; дождь" },
    { file: "309_вошь.wav", chulym: "пит", tr: "pit", ru: "вошь" },
    { file: "55_год.wav", chulym: "ч<span class='special-char'>ӧ</span>л", tr: "<span class='special-char'>ʨə</span>l", ru: "год" },
    { file: "927_дым.wav", chulym: "тудун", tr: "tydún", ru: "дым" },
    { file: "20_дай.wav", chulym: "пер", tr: "p<span class='special-char'>ɛ</span>r", ru: "давать" },
    { file: "390_далеко.wav", chulym: "ара<span class='special-char'>қ</span>", tr: "<span class='special-char'>ə</span>rάq", ru: "далеко" },
    { file: "12_два.wav", chulym: "иг<span class='special-char'>ӓ</span>", tr: "íg<span class='special-char'>ə</span>", ru: "два" },
    { file: "81_дерево.wav", chulym: "а<span class='special-char'>ғ</span>аш", tr: "a<span class='special-char'>ʁ</span>á<span class='special-char'>ɕ</span>", ru: "дерево" },
    { file: "1142_длинный.wav", chulym: "узун", tr: "uzún", ru: "длинный" },
    { file: "155_дорога.wav", chulym: "чоол", tr: "<span class='special-char'>ʨ</span>o:l", ru: "дорога" },
    { file: "443_хороший.wav", chulym: "чахшы", tr: "<span class='special-char'>ʨ</span>aχ<span class='special-char'>ʃə</span>́", ru: "хороший" },
    { file: "81_ешь.wav", chulym: "чи", tr: "<span class='special-char'>ʨ</span>i", ru: "есть (ешь)" },
    { file: "1099_желтый.wav", chulym: "сары<span class='special-char'>ғ</span>", tr: "sár<span class='special-char'>əʁ</span>", ru: "жёлтый" },
    { file: "184_жги.wav", chulym: "<span class='special-char'>ӧ</span>рт<span class='special-char'>ӓ</span>", tr: "<span class='special-char'>ø</span>rt<span class='special-char'>ɛ</span>́", ru: "жечь, сжечь" },
    { file: "647_живот.wav", chulym: "<span class='special-char'>қ</span>урса<span class='special-char'>қ</span>", tr: "qursáq", ru: "живот" },
    { file: "346_жир.wav", chulym: "ча<span class='special-char'>ғ</span>", tr: "<span class='special-char'>ʨ</span>a<span class='special-char'>ʁ</span>", ru: "жир" },
    { file: "536_звезда.wav", chulym: "чылдыс", tr: "<span class='special-char'>ʨə</span>ld<span class='special-char'>ə</span>́s", ru: "звезда" },
    { file: "218_зеленый.wav", chulym: "к<span class='special-char'>ӧ</span>к", tr: "k<span class='special-char'>ø</span>k", ru: "зелёный" },
    { file: "296_земля.wav", chulym: "ч<span class='special-char'>ӓ</span>р", tr: "<span class='special-char'>ʨɛ</span>r", ru: "земля; камень" },
    { file: "346_знай.wav", chulym: "п<span class='special-char'>ӧ</span>л", tr: "p<span class='special-char'>ə</span>l", ru: "знать" },
    { file: "763_иди.wav", chulym: "пар", tr: "par", ru: "идти" },
    { file: "577_имя.wav", chulym: "ат", tr: "at", ru: "имя" },
    { file: "1127_колено.wav", chulym: "таш-паажа", tr: "ta<span class='special-char'>ʃ</span>-pá:<span class='special-char'>ʒə</span>", ru: "колено" },
    { file: "1022_кость.wav", chulym: "с<span class='special-char'>ӧ</span>к", tr: "s<span class='special-char'>ø</span>k", ru: "кость" },
    { file: "836_красный.wav", chulym: "<span class='special-char'>қ</span>ызыл", tr: "q<span class='special-char'>ə</span>z<span class='special-char'>ə</span>́l", ru: "красный" },
    { file: "188_круглый (но знач. не знает).wav", chulym: "тума<span class='special-char'>қ</span>", tr: "tumáq", ru: "круглый" },
    { file: "104_лежи.wav", chulym: "чат", tr: "<span class='special-char'>ʨ</span>at", ru: "лежать" },
    { file: "360_лети.wav", chulym: "уч", tr: "ut<span class='special-char'>ɕ</span>", ru: "лететь, летать" },
    { file: "322_маленький.wav", chulym: "кичэ<span class='special-char'>ӵ</span>", tr: "kit<span class='special-char'>ɕɛtɕ</span>", ru: "маленький (Вар. 1)" },
    { file: "445_маленький.wav", chulym: "пелич<span class='special-char'>ӓ</span>к", tr: "pelít<span class='special-char'>ɕɛ</span>k", ru: "маленький (Вар. 2)" },
    { file: "71_много.wav", chulym: "а<span class='special-char'>ӵ</span>тыл", tr: "at<span class='special-char'>ɕə</span>l", ru: "много (Вар. 1)" },
    { file: "228_много.wav", chulym: "к<span class='special-char'>ӧ</span>п", tr: "k<span class='special-char'>ø</span>p", ru: "много (Вар. 2)" },
    { file: "366_мой.wav", chulym: "ме<span class='special-char'>ң</span>", tr: "me<span class='special-char'>ŋ</span>", ru: "мой" },
    { file: "462_мы.wav", chulym: "п<span class='special-char'>ӓ</span>с", tr: "p<span class='special-char'>ə</span>s", ru: "мы" },
    { file: "344_мясо.wav", chulym: "эт", tr: "<span class='special-char'>ɛ</span>t", ru: "мясо" },
    { file: "788_новый.wav", chulym: "чаай", tr: "<span class='special-char'>ʨ</span>a:j", ru: "новый" },
    { file: "752_ноготь.wav", chulym: "тыр<span class='special-char'>ғ</span>а<span class='special-char'>қ</span>", tr: "t<span class='special-char'>ə</span>r<span class='special-char'>ŋ</span>áq", ru: "ноготь" },
    { file: "204_огонь.wav", chulym: "от", tr: "ot", ru: "огонь" },
    { file: "88_песок.wav", chulym: "<span class='special-char'>қ</span>ум", tr: "qum", ru: "песок" },
    { file: "277_пей.wav", chulym: "ич", tr: "it<span class='special-char'>ɕ</span>", ru: "пить" },
    { file: "22_птица.wav", chulym: "<span class='special-char'>қ</span>уш", tr: "qu<span class='special-char'>ʃ</span>", ru: "птица" },
    { file: "560_рог.wav", chulym: "мыс", tr: "mys", ru: "рог" },
    { file: "306_рыба порч..wav", chulym: "палы<span class='special-char'>қ</span>", tr: "pál<span class='special-char'>ə</span>q", ru: "рыба" },
    { file: "331_сидеть.wav", chulym: "олтурая<span class='special-char'>ғ</span>а", tr: "ol:uraj<span class='special-char'>ʁ</span>á", ru: "сидеть" },
    { file: "690_собака.wav", chulym: "адай", tr: "adáj", ru: "собака" },
    { file: "269_солнце.wav", chulym: "кун-<span class='special-char'>қ</span>ара<span class='special-char'>ғ</span>а", tr: "kun-qará<span class='special-char'>ʁ</span>a", ru: "солнце" },
    { file: "1066_теплый.wav", chulym: "ч<span class='special-char'>ӧ</span>лы<span class='special-char'>ғ</span>", tr: "<span class='special-char'>ʨə</span>l<span class='special-char'>ə</span>́<span class='special-char'>ʁ</span>", ru: "тёплый" }
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