const dbChapters = [
    // --- PRIMAIRE ---
    {
        id: "elem_math_12",
        level: "12ème",
        series: null,
        subject: "Mathématiques",
        title: "Nombres et Calculs Élémentaires",
        summary: "Apprentissage des chiffres de 0 à 100, additions et soustractions de base.",
        lessons: [{ title: "1. Numération", content: "Comprendre la dizaine et l'unité." }],
        practicalExercises: [{ statement: "Calculer 15 + 12", correction: "15 + 12 = 27." }],
        questions: [{ question: "Combien font 10 + 15 ?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "10 + 15 = 25." }]
    },
    {
        id: "elem_malagasy_10",
        level: "10ème",
        series: null,
        subject: "Malagasy",
        title: "Fanehoan-kevitra sy Fitsipika",
        summary: "Fianarana ny rafitry ny fehezanteny sy ny teny malagasy fototra.",
        lessons: [{ title: "1. Ny Anarana", content: "Fahafantarana ny anarana iombonana sy ny anarana tsongaina." }],
        practicalExercises: [{ statement: "Mitadiava anarana iombonana.", correction: "Ohatra : trano, fiara." }],
        questions: [{ question: "Iza amin'ireo no anarana tsongaina ?", options: ["Soa", "Tanàna", "Antananarivo", "Lalana"], correctAnswer: 2, explanation: "Antananarivo dia anarana tsongaina." }]
    },
    {
        id: "elem_francais_7",
        level: "7ème",
        series: null,
        subject: "Français",
        title: "Les Bases de la Conjugaison et du Nom",
        summary: "Étude des groupes de verbes au présent de l'indicatif et du groupe nominal.",
        lessons: [{ title: "1. Le Présent de l'indicatif", content: "Les verbes du 1er groupe prennent -e, -es, -e, -ons, -ez, -ent." }],
        practicalExercises: [{ statement: "Conjuguer 'chanter' à la 1ère personne du pluriel.", correction: "Nous chantons." }],
        questions: [{ question: "Quelle est la terminaison de 'tu finis' ?", options: ["-s", "-x", "-t", "-ent"], correctAnswer: 0, explanation: "Le verbe finir (2e groupe) prend un -s avec tu." }]
    },
Commande ECHO d�sactiv�e.
    // --- COLLEGE ---
    {
        id: "coll_math_6",
        level: "6ème",
        series: null,
        subject: "Mathématiques",
        title: "Nombres Décimaux et Géométrie de Base",
        summary: "Maîtrise des nombres à virgule, droites perpendiculaires et parallèles.",
        lessons: [{ title: "1. Les décimaux", content: "Un nombre décimal est composé d'une partie entière et d'une partie décimale." }],
        practicalExercises: [{ statement: "Calculer 12,5 + 3,25", correction: "12,50 + 3,25 = 15,75." }],
        questions: [{ question: "Quel est le chiffre des dixièmes dans 45,89 ?", options: ["5", "8", "9", "4"], correctAnswer: 1, explanation: "Le chiffre des dixièmes est 8." }]
    },
    {
        id: "coll_svt_5",
        level: "5ème",
        series: null,
        subject: "SVT",
        title: "Respiration et Circulation chez l'Homme",
        summary: "Fonctionnement des poumons et du cœur dans l'organisme.",
        lessons: [{ title: "1. Les échanges gazeux", content: "Le sang absorbe l'oxygène au niveau des alvéoles pulmonaires." }],
        practicalExercises: [{ statement: "Quel organe pompe le sang ?", correction: "Le cœur." }],
        questions: [{ question: "Quel gaz est rejeté lors de l'expiration ?", options: ["Dioxygène", "Dioxyde de carbone", "Azote", "Hydrogène"], correctAnswer: 1, explanation: "Le corps rejette le dioxyde de carbone (CO2)." }]
    },
    {
        id: "coll_hg_4",
        level: "4ème",
        series: null,
        subject: "Histoire-Géographie",
        title: "L'Europe et la Révolution Industrielle",
        summary: "Les transformations économiques et sociales en Europe au XIXe siècle.",
        lessons: [{ title: "1. L'essor de l'industrie", content: "Apparition de la machine à vapeur et transformation des paysages urbains." }],
        practicalExercises: [{ statement: "Citer une source d'énergie du XIXe siècle.", correction: "Le charbon." }],
        questions: [{ question: "Quelle invention symbolise la révolution industrielle ?", options: ["L'ordinateur", "La machine à vapeur", "La boussole", "L'imprimerie"], correctAnswer: 1, explanation: "La machine à vapeur a propulsé l'industrie." }]
    },
    {
        id: "coll_math_3_bepc",
        level: "3ème",
        series: null,
        subject: "Mathématiques",
        title: "Théorème de Pythagore et Trigonométrie (BEPC)",
        summary: "Calculs géométriques et trigonométriques pour le Brevet.",
        lessons: [{ title: "1. Pythagore", content: "BC² = AB² + AC² dans un triangle rectangle en A." }],
        practicalExercises: [{ statement: "AB=3, AC=4. Trouver BC.", correction: "BC = sqrt(9+16) = 5." }],
        questions: [{ question: "Que vaut le cosinus d'un angle aigu ?", options: ["Toujours supérieur à 1", "Compris entre 0 et 1", "Négatif", "Toujours égal à 0"], correctAnswer: 1, explanation: "Le rapport est compris entre 0 et 1." }]
    },
    {
        id: "coll_phys_3",
        level: "3ème",
        series: null,
        subject: "Physique-Chimie",
        title: "Loi d'Ohm et Électricité",
        summary: "Relation U = R * I dans les circuits électriques.",
        lessons: [{ title: "1. Loi d'Ohm", content: "U = R * I avec U en Volts, R en Ohms et I en Ampères." }],
        practicalExercises: [{ statement: "R=50, I=0.2. Calculer U.", correction: "U = 50 * 0.2 = 10 V." }],
        questions: [{ question: "Quelle est l'unité de l'intensité ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correctAnswer: 1, explanation: "L'intensité se mesure en Ampères." }]
    },
Commande ECHO d�sactiv�e.
    // --- LYCEE 
    {
        id: "lyc_phys_2nde",
        level: "2nde",
        series: null,
        subject: "Physique-Chimie",
        title: "Mouvement et Forces en Mécanique",
        summary: "Étude de la vitesse, des trajectoires et des actions mécaniques.",
        lessons: [{ title: "1. La vitesse moyenne", content: "v = d / t (distance divisée par le temps)." }],
        practicalExercises: [{ statement: "100 km en 1h30. Calculer v.", correction: "v = 100 / 1.5 = 66.67 km/h." }],
        questions: [{ question: "Quelle est l'unité internationale de la vitesse ?", options: ["km/h", "m/s", "cm/s", "nœud"], correctAnswer: 1, explanation: "Le mètre par seconde (m/s) est l'unité SI." }]
    },
    {
        id: "lyc_anglais_1ere",
        level: "1ère",
        series: null,
        subject: "Anglais",
        title: "Past Tense and Present Perfect",
        summary: "Grammaire anglaise avancée pour l'exprimer des actions passées.",
        lessons: [{ title: "1. Present Perfect", content: "Formé avec have/has + participe passé pour un lien avec le présent." }],
        practicalExercises: [{ statement: "Traduire : 'J'ai déjà visité Madagascar.'", correction: "'I have already visited Madagascar.'" }],
        questions: [{ question: "Quel auxiliaire utilise-t-on au Present Perfect avec 'He' ?", options: ["have", "has", "did", "is"], correctAnswer: 1, explanation: "On utilise 'has' à la 3e personne du singulier." }]
    },
    {
        id: "term_math_c_d",
        level: "Terminale BACC",
        series: ["Série C", "Série D"],
        subject: "Mathématiques",
        title: "Nombres Complexes et Analyse (Terminale C & D)",
        summary: "Forme algébrique, exponentielles et calcul intégral pour le BACC scientifique.",
        lessons: [{ title: "1. Forme algébrique", content: "z = a + ib avec i² = -1." }],
        practicalExercises: [{ statement: "Calculer le module de z = 3 + 4i", correction: "|z| = 5." }],
        questions: [{ question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Module égal à 5." }]
    },
    {
        id: "term_philo_a",
        level: "Terminale BACC",
        series: ["Série A1", "Série A2"],
        subject: "Philosophie",
        title: "La Conscience, l'Art et la Liberté (Terminale A)",
        summary: "Dissertation et notions philosophiques pour les séries littéraires.",
        lessons: [{ title: "1. Le Sujet pensant", content: "Descartes et la conscience de soi." }],
        practicalExercises: [{ statement: "Définir la liberté selon Sartre.", correction: "L'homme est condamné à être libre." }],
        questions: [{ question: "Qui a écrit 'Je pense donc je suis' ?", options: ["Platon", "Descartes", "Kant", "Nietzsche"], correctAnswer: 1, explanation: "René Descartes." }]
    },
    {
        id: "term_ses_ose",
        level: "Terminale BACC",
        series: ["Série OSE"],
        subject: "SES",
        title: "Croissance et Échanges Internationaux (Terminale OSE)",
        summary: "Analyse économique du PIB et du commerce mondial.",
        lessons: [{ title: "1. Le PIB", content: "Mesure de la production intérieure brute d'un pays." }],
        practicalExercises: [{ statement: "Définir le libre-échange.", correction: "Politique prônant l'abolition des barrières douanières." }],
        questions: [{ question: "Que mesure le PIB ?", options: ["La richesse créée", "La population", "Le climat", "La superficie"], correctAnswer: 0, explanation: "Le PIB mesure la valeur totale de la production." }]
    }
];
Commande ECHO d�sactiv�e.
const schoolDatabase = {
    levels: dbMetadata.levels,
    baccSeries: dbMetadata.baccSeries,
    subjects: dbMetadata.subjects,
    chapters: dbChapters
};
