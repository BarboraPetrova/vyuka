
/* KURZY */



/* Algoritmy - zdroje */
const belohlavekSlidy1 = {
    name: "První slidy Prof. Bělohlávka",
    url: "https://soubor.inf.upol.cz/index.php/s/44LSDq3kPJZEx4s?dir=/&amp;editing=false&amp;openfile=true"
}

const belohlavekSlidy2 = {
    name: "Druhé slidy Prof. Bělohlávka",
    url: "https://soubor.inf.upol.cz/index.php/s/PZ9LamA9yBT329b?dir=/&amp;editing=false&amp;openfile=true"
}
const cormen = {
    name: "Cormen Introduction to algorithms",
    url: "https://github.com/calvint/AlgorithmsOneProblems/blob/master/Algorithms/Thomas%20H.%20Cormen,%20Charles%20E.%20Leiserson,%20Ronald%20L.%20Rivest,%20Clifford%20Stein%20Introduction%20to%20Algorithms,%20Third%20Edition%20%202009.pdf"
}
    
const algoSources = [
    belohlavekSlidy1,
    belohlavekSlidy2,
    cormen
]

/* Algoritmy - lectures */
const algoLecture1 = {
    id: "1",
    topic: "Úvod, opakování elementárních funkcí",
    date: "22. 9. 2026"
}

const algoLecture2 = {
    id: "2",
    topic: "...",
    date: "29. 9. 2026"
}

const algoLectures = [
    algoLecture1,
    algoLecture2
]

/* Algoritmy */
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
    sources: algoSources,
    lectures: algoLectures
}


const webSources = [

]

const webLecture1 = {
    id: "1",
    topic: "Úvodní cvičení",
    date: "18. 2. 2025"
}

const webLectures = [
    webLecture1,

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
    conditions: "podmínky",
    sources: webSources,
    lectures: webLectures
}



const courses = [algo, web]

export { courses };