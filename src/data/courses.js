
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
    id: "algo2",
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
    conditions: "Účast na 10 z 12 cvičení, odevzdané domácí úkoly, zápočtový test min. 60 %.",
    sources: algoSources,
    lectures: algoLectures
}


/* Web */
const web = {
    id: "web",
    title: "Tvorba webových stránek",
    shortcut: "KMI/WEB",
    description: "",
    semester: "L",
    year: "2025/26",
    class: "LP-500",
    time: "út 15:00 - 16:30",
    conditions: "podmínky",
    sources: [

    ]
}

const courses = [algo, web]

export { courses };