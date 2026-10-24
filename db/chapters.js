const dbChapters = [
    {
        id: "elem_math_12",
        level: "12ème",
        series: null,
        subject: "Mathématiques",
        title: "Nombres et Calculs Élémentaires (12ème)",
        summary: "Apprentissage de la numération de 0 à 100, additions et soustractions simples.",
        lessons: [
            { title: "1. Les dizaines et unités", content: "Un nombre à deux chiffres est composé d'une dizaine et d'unités. Exemple : 34 = 3 dizaines et 4 unités." }
        ],
        practicalExercises: [
            { statement: "Calculer : 25 + 14", correction: "25 + 14 = (20 + 10) + (5 + 4) = 30 + 9 = 39." }
        ],
        questions: [
            { question: "Combien font 15 + 24 ?", options: ["35", "39", "40", "45"], correctAnswer: 1, explanation: "15 + 24 = 39." }
        ]
    },
    {
        id: "coll_math_6",
        level: "6ème",
        series: null,
        subject: "Mathématiques",
        title: "Nombres Décimaux et Opérations (6ème)",
        summary: "Découverte des nombres décimaux, addition, soustraction et position de la virgule.",
        lessons: [
            { title: "1. Partie entière et partie décimale", content: "Dans le nombre 12,35, 12 est la partie entière et 0,35 la partie décimale." }
        ],
        practicalExercises: [
            { statement: "Poser et calculer : 12,5 + 3,25", correction: "12,50 + 3,25 = 15,75." }
        ],
        questions: [
            { question: "Quel est le chiffre des dixièmes dans 45,89 ?", options: ["5", "8", "9", "4"], correctAnswer: 1, explanation: "Le chiffre des dixièmes est le premier chiffre après la virgule, soit 8." }
        ]
    },
    {
        id: "coll_math_3",
        level: "3ème",
        series: null,
        subject: "Mathématiques",
        title: "Théorème de Pythagore et Applications (3ème)",
        summary: "Calcul des longueurs dans le triangle rectangle en vue du Brevet des Collèges.",
        lessons: [
            { title: "1. Égalité de Pythagore", content: "Dans un triangle rectangle ABC rectangle en A : BC² = AB² + AC²." }
        ],
        practicalExercises: [
            { statement: "AB = 3 cm, AC = 4 cm. Calculer l'hypoténuse BC.", correction: "BC² = 3² + 4² = 9 + 16 = 25. Donc BC = sqrt(25) = 5 cm." }
        ],
        questions: [
            { question: "Dans un triangle rectangle, quel est le côté le plus long ?", options: ["Le côté opposé", "L'adjacent", "L'hypoténuse", "La hauteur"], correctAnswer: 2, explanation: "L'hypoténuse est toujours le côté opposé à l'angle droit et le plus long du triangle." }
        ]
    },
    {
        id: "term_math_c_d",
        level: "Terminale BACC",
        series: ["Série C", "Série D"],
        subject: "Mathématiques",
        title: "Nombres Complexes et Géométrie (Terminale C & D)",
        summary: "Forme algébrique z = a + ib, module, argument et applications géométriques au BACC.",
        lessons: [
            { title: "1. Forme Algébrique et Conjugué", content: "Tout nombre complexe s'écrit de manière unique z = a + ib. Son conjugué est z_barre = a - ib." }
        ],
        practicalExercises: [
            { statement: "Calculer le module de z = 3 + 4i.", correction: "|z| = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5." }
        ],
        questions: [
            { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Le module est |z| = sqrt(3² + 4²) = 5." }
        ]
    },
    {
        id: "bepc_phys_3",
        level: "3ème",
        series: null,
        subject: "Physique-Chimie",
        title: "Loi d'Ohm et Puissance Électrique (3ème)",
        summary: "Relations fondamentales U = R * i et P = U * i pour les circuits électriques.",
        lessons: [
            { title: "1. La Loi d'Ohm", content: "La tension U aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I : U = R * I." }
        ],
        practicalExercises: [
            { statement: "R = 100 Ohms, I = 0,05 A. Calculer U.", correction: "U = 100 * 0,05 = 5 Volts." }
        ],
        questions: [
            { question: "Quelle est l'unité de la résistance électrique ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correctAnswer: 2, explanation: "La résistance s'exprime en Ohms (Ω)." }
        ]
    }
];
Commande ECHO d�sactiv�e.
const schoolDatabase = {
    levels: dbMetadata.levels,
    baccSeries: dbMetadata.baccSeries,
    subjects: dbMetadata.subjects,
    chapters: dbChapters
};
