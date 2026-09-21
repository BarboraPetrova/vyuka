/* ==========================================================================
   KMI/ALGO - ALGORITMIZACE
   ========================================================================== */

/* --- Algoritmy - zdroje --------------------------------------------------- */

const algoSources = [
    {name: "První slidy Prof. Bělohlávka", url: "https://soubor.inf.upol.cz/index.php/s/44LSDq3kPJZEx4s?dir=/&amp;editing=false&amp;openfile=true"},
    {name: "Druhé slidy Prof. Bělohlávka", url: "https://soubor.inf.upol.cz/index.php/s/PZ9LamA9yBT329b?dir=/&amp;editing=false&amp;openfile=true"},
    {name: "Cormen Introduction to algorithms", url: "https://github.com/calvint/AlgorithmsOneProblems/blob/master/Algorithms/Thomas%20H.%20Cormen,%20Charles%20E.%20Leiserson,%20Ronald%20L.%20Rivest,%20Clifford%20Stein%20Introduction%20to%20Algorithms,%20Third%20Edition%20%202009.pdf"}
]

/* --- Algoritmy - hodiny ---------------------------------------------------- */
const algoLecture1 = {
    id: "1",
    topic: "Úvodní hodina, opakování elementárních funkcí",
    date: "22. 9. 2026"
}


const algoLectures = [
    algoLecture1
]

/* --- Algoritmy - kurz ----------------------------------------------------- */
const algo = {
    id: "algo",
    title: "Algoritmizace",
    shortcut: "KMI/ALGO",
    description: "Základy algoritmizace - pojmy, třídící metody a další základní algoritmy.",
    semester: "Z",
    year: "2026/27",
    class: "LP-5002",
    time: "út 15:00 - 16:30",
    conditions: [
        <>Během semestru se budou psát <span>dvě zápočtové písemky:</span> první přibližně v polovině semestru, druhá na jeho konci. Pro obě písemky bude vypsán jeden společný opravný termín v zápočtovém týdnu. Jiná náhrada není možná.</>,
        <>K úspěšnému splnění zápočtu je nutné získat celkem alespoň <span>75 % bodů</span> z obou písemek dohromady.</>,
        <>Povoleny jsou <span>maximálně 2 absence</span>. V případě dlouhodobé nemoci nebo jiných komplikací mě prosím včas kontaktujte.</>
    ],
    tasks: [
        <>Ke každému cvičení budou zadány doplňující úkoly.</>
    ],
    sources: algoSources,
    lectures: algoLectures
}

/* ==========================================================================
   KMI/WEB - TVOEBA WEBOVÝCH STRÁNEK
   ========================================================================== */

   /* --- web - zdroje ------------------------------------------------------ */
const webSources = [
    {name: "Stránky doc. Trnečky", url: "https://trnecka.inf.upol.cz/teaching/web/"}
]

/* --- web - zdroje ------------------------------------------------------ */
const webLecture1 = {
    id: "1",
    topic: "Úvodní cvičení",
    date: "18. 2. 2026"
}

const webLecture2 = {
    id: "2",
    topic: "Základy HTML a CSS",
    date: "25. 2. 2026"
}

const webLecture3 = {
    id: "3",
    topic: "Struktura a vizualizace webové stránky",
    date: "4. 3. 2026"
}

const webLecture4 = {
    id: "4",
    topic: "Dědičnost, kaskáda, specifičnost, BEM",
    date: "11. 3. 2026"
}

const webLecture5 = {
    id: "5",
    topic: "Grid",
    date: "18. 3. 2026"
}

const webLecture6 = {
    id: "6",
    topic: "Flex",
    date: "25. 3. 2026"
}

const webLecture7 = {
    id: "7",
    topic: "Pozicování",
    date: "1. 4. 2026"
}

const webLecture8 = {
    id: "8",
    topic: "Responzivní layout, písmo",
    date: "8. 4. 2026"
}

const webLecture9 = {
    id: "9",
    topic: "Seznamy, tabulky, formuláře",
    date: "15. 4. 2026"
}

const webLecture10 = {
    id: "10",
    topic: "Pokročilé CSS, zajímavosti",
    date: "29. 4. 2026"
}

const webLectures = [
    webLecture1,
    webLecture2,
    webLecture3,
    webLecture4,
    webLecture5,
    webLecture6,
    webLecture7,
    webLecture8,
    webLecture9,
    webLecture10
]


/* Web */
const web = {
    id: "web",
    title: "Tvorba webových stránek",
    shortcut: "KMI/WEB",
    description: "",
    semester: "L",
    year: "2025/26",
    class: "LP-5003",
    time: "út 15:00 - 16:30",
    conditions: [
        <>Získání zápočtu je podmíněno splněním dvou požadavků: úspěšným absolvováním všech písemek a vypracováním zápočtového projektu. Během semestru se budou psát <span>tři písemky</span> zaměřené na aktuálně probíraná témata. Z každé písemky bude možné získat určitý počet bodů. Pro získání zápočtu musí student ze všech písemek získat v součtu alespoň 65 % bodů. Současně je nutné vypracovat <span>zápočtový projekt</span>, který bude představen na začátku semestru.</>,
        <><span>Termíny písemek</span> - První písemka se bude psát na cvičení <span>11.3</span>. Druhá písemka se bude psát na cvičení <span>1.4.</span>(nejedná se o apríl, opravdu se bude psát)! Třetí písemka se bude psát na cvičení <span>22.4</span>. Pokud se na cvičení nemůžete z jakéhokoliv důvodu dostavit a písemku napsat, informujte mě dostatečně dopředu emailem. Následně Vám bude sdělen náhradní termín. Opravu písemky je možné napsat na posledním cvičení v zápočtovém týdnu (<span>6.5.</span>). Pokud se Vás oprava týká, napište mi, kterou písemku si chcete opravit (můžete klidně všechny).</>,
        <><span>Hodnocení zápočtového projektu</span> - Zápočtový projekt je hodnocen především z hlediska uplatnění znalostí a principů probíraných v průběhu celého kurzu. Cílem projektu není použití pokročilých nebo externích technologií, ale správná aplikace postupně nabývaných znalostí. Pro vypracování projektu není potřeba nic, co by nebylo zmíněno na přednáškách, cvičeních nebo ve studijních skriptech. Při hodnocení se posuzuje splnění zadání, přičemž výsledné řešení by se mělo co nejvíce podobat zadané předloze, dále kvalita a přehlednost zdrojového kódu, validita HTML dle validátoru W3C a (ideálně) dodržení metodiky BEM při zápisu tříd. Důraz je kladen na pochopení základních principů, nikoli na mechanické kopírování nebo nadbytečné rozšiřování řešení nad rámec kurzu.</>,
        <><span>Odevzdání zápočtového projektu</span> - Zápočtový projekt bude možné odevzdat v termínech, které budou vypsány v průběhu semestru. Celkem bude nabídnuto pět termínů, ve kterých lze projekt odevzdat. Pokud nebude řešení splňovat požadavky, bude vráceno k přepracování. Projekt lze odevzdat maximálně třikrát.</>
    ],
    tasks: [
        <>Na většině cvičení budou zadány dobrovolné úkoly, kterou slouží k procvičení aktuálně probíraného tématu. Část úkolů bude zaměřena na vypracování závěrečného projektu, proto je doporučeno se jim průběžně věnovat. Případné odevzdávání úkolů bude probíhat na hodině.</>
    ],
    sources: webSources,
    lectures: webLectures
}



const courses = [algo, web]

export { courses };

export function formatSemester(course) {
  const label = course.semester === "Z" ? "Zimní semestr" : "Letní semestr";
  return `${label} ${course.year}`;
}

export function formatLectureNumber(id) {
  return String(id).padStart(2, "0");
}