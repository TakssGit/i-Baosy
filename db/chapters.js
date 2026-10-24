const dbChapters = [
    {
        id: "elem_math_12",
        level: "12ème",
        series: null,
        subject: "Mathématiques",
        title: "Nombres et Calculs Élémentaires",
        summary: "Apprentissage des chiffres de 0 à 100, additions et soustractions de base.",
        lessons: [
            { title: "1. Numération", content: "Comprendre la dizaine et l'unité." }
        ],
        practicalExercises: [
            { statement: "Calculer 15 + 12", correction: "15 + 12 = 27." }
        ],
        questions: [
            { question: "Combien font 10 + 15 ?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "10 + 15 = 25." }
        ]
    },
    {
        id: "coll_math_3",
        level: "3ème",
        series: null,
        subject: "Mathématiques",
        title: "Théorème de Pythagore et Calculs",
        summary: "Propriétés du triangle rectangle en classe de troisième pour préparer le Brevet.",
        lessons: [
            { title: "1. Théorème", content: "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés." }
        ],
        practicalExercises: [
            { statement: "Triangle rectangle de côtés 3 et 4, trouver l'hypoténuse.", correction: "3² + 4² = 9 + 16 = 25. Racine de 25 = 5." }
        ],
        questions: [
            { question: "Que vaut l'hypoténuse si les côtés mesurent 3 et 4 ?", options: ["5", "6", "7", "12"], correctAnswer: 0, explanation: "D'après Pythagore, c = sqrt(3^2 + 4^2) = 5." }
        ]
    },
    {
        id: "term_math_c_d",
        level: "Terminale BACC",
        series: ["Série C", "Série D"],
        subject: "Mathématiques",
        title: "Nombres Complexes et Analyse",
        summary: "Forme algébrique z = a + ib, module, argument et fonctions exponentielles pour les séries C et D.",
        lessons: [
            { title: "1. Forme Algébrique", content: "Un nombre complexe s'écrit z = a + ib avec i² = -1." }
        ],
        practicalExercises: [
            { statement: "Calculer le module de z = 3 + 4i.", correction: "|z| = sqrt(3² + 4²) = 5." }
        ],
        questions: [
            { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Le module vaut 5." }
        ]
    },
    {
        id: "term_philo_a",
        level: "Terminale BACC",
        series: ["Série A1", "Série A2"],
        subject: "Philosophie",
        title: "La Conscience et l'Inconscient",
        summary: "Notions philosophiques majeures pour les séries littéraires (A1/A2).",
        lessons: [
            { title: "1. Le Sujet", content: "La conscience de soi et du monde." }
        ],
        practicalExercises: [
            { statement: "Expliquer 'Conscience et liberté'.", correction: "Être conscient permet de choisir ses actes de manière réfléchie." }
        ],
        questions: [
            { question: "Qui a fondé la psychanalyse ?", options: ["Descartes", "Sigmund Freud", "Platon", "Sartre"], correctAnswer: 1, explanation: "Sigmund Freud est le père de la psychanalyse." }
        ]
    },
    {
        id: "term_ses_ose",
        level: "Terminale BACC",
        series: ["Série OSE"],
        subject: "SES",
        title: "Croissance et Économie Internationale",
        summary: "Analyse du PIB, des échanges internationaux et du développement pour la série OSE.",
        lessons: [
            { title: "1. Le PIB", content: "Indicateur de mesure de la production intérieure brute." }
        ],
        practicalExercises: [
            { statement: "Définir la balance commerciale.", correction: "Différence entre les exportations et les importations de biens." }
        ],
        questions: [
            { question: "Que mesure le PIB ?", options: ["La richesse créée", "La population totale", "Le taux d'inflation", "La dette publique"], correctAnswer: 0, explanation: "Le PIB mesure la valeur totale des biens et services produits." }
        ]
    }
];

const schoolDatabase = {
    levels: dbMetadata.levels,
    baccSeries: dbMetadata.baccSeries,
    subjects: dbMetadata.subjects,
    chapters: dbChapters
};