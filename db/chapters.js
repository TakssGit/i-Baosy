const dbChapters = [
    {
        id: "elem_math_12_add",
        level: "12ème",
        series: null,
        subject: "Mathématiques",
        title: "Addition et Calcul Mental Élémentaire",
        summary: "Apprendre à regrouper les unités et les dizaines pour effectuer des additions simples.",
        lessons: [
            { title: "1. Le principe de l'addition", content: "L'addition consiste à assembler deux quantités. Exemple : 12 + 15 = 27." }
        ],
        practicalExercises: [
            { statement: "Calculez la somme : 24 + 35.", correction: "24 + 35 = (20 + 30) + (4 + 5) = 59." }
        ],
        questions: [
            { question: "Combien font 18 + 12 ?", options: ["28", "30", "32", "40"], correctAnswer: 1, explanation: "18 + 12 = 30." }
        ]
    },
    {
        id: "coll_francais_6_recit",
        level: "6ème",
        series: null,
        subject: "Français",
        title: "Les Structures du Récit et la Narration",
        summary: "Étude des temps du récit au passé (passé simple, imparfait) et de la structure d'un conte.",
        lessons: [
            { title: "1. Imparfait et Passé Simple", content: "L'imparfait exprime une action longue ou un décor, le passé simple une action brève et ponctuelle." }
        ],
        practicalExercises: [
            { statement: "Conjuguez au passé simple : 'Il (prendre) son sac et (partir).'", correction: "Il prit son sac et partit." }
        ],
        questions: [
            { question: "Quel temps exprime une action brève au second plan du récit ?", options: ["L'imparfait", "Le passé simple", "Le présent", "Le futur"], correctAnswer: 1, explanation: "Le passé simple est le temps de l'action principale et ponctuelle dans le récit." }
        ]
    },
    {
        id: "bepc_phys_3_electricite",
        level: "3ème",
        series: null,
        subject: "Physique-Chimie",
        title: "Loi d'Ohm et Circuits Électriques",
        summary: "Relation fondamentale entre la tension U, l'intensité I et la résistance R (U = R x I).",
        lessons: [
            { title: "1. Enoncé de la loi d'Ohm", content: "U = R x I avec U en Volts, R en Ohms et I en Ampères." }
        ],
        practicalExercises: [
            { statement: "R = 50 Ohms, I = 0,2 A. Calculer U.", correction: "U = 50 x 0,2 = 10 Volts." }
        ],
        questions: [
            { question: "Quelle est l'unité de la résistance ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correctAnswer: 2, explanation: "L'unité légale est l'Ohm (Ω)." }
        ]
    },
    {
        id: "seconde_svt_cellule",
        level: "2nde",
        series: null,
        subject: "SVT",
        title: "La Cellule, Unité Vivante",
        summary: "Structure cellulaire, membrane, cytoplasme et noyau chez les êtres vivants.",
        lessons: [
            { title: "1. Organisation cellulaire", content: "La cellule est l'unité structurelle et fonctionnelle de tous les êtres vivants." }
        ],
        practicalExercises: [
            { statement: "Quel organite contient l'information génétique (ADN) ?", correction: "Le noyau cellulaire." }
        ],
        questions: [
            { question: "Où se situe l'ADN dans une cellule eucaryote ?", options: ["Dans le cytoplasme", "Dans le noyau", "Dans la membrane", "Dans la vacuole"], correctAnswer: 1, explanation: "L'ADN est principalement stocké dans le noyau de la cellule eucaryote." }
        ]
    },
    {
        id: "term_math_c_complexes",
        level: "Terminale BACC",
        series: ["Série C", "Série D"],
        subject: "Mathématiques",
        title: "Nombres Complexes et Géométrie",
        summary: "Forme algébrique z = a + ib, module, argument et applications géométriques au BACC.",
        lessons: [
            { title: "1. Module d'un complexe", content: "|z| = sqrt(a² + b²)." }
        ],
        practicalExercises: [
            { statement: "Calculer le module de z = 3 + 4i.", correction: "|z| = sqrt(9 + 16) = 5." }
        ],
        questions: [
            { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Le module est égal à 5." }
        ]
    },
    {
        id: "term_philo_a_conscience",
        level: "Terminale BACC",
        series: ["Série A1", "Série A2"],
        subject: "Philosophie",
        title: "La Conscience et l'Inconscient",
        summary: "Étude du sujet pensant chez Descartes et remise en cause par la psychanalyse freudienne.",
        lessons: [
            { title: "1. Le Cogito", content: "Je pense donc je suis." }
        ],
        practicalExercises: [
            { statement: "En quoi Freud révolutionne-t-il la notion de sujet ?", correction: "En démontrant que le psychisme humain ne se réduit pas à la conscience." }
        ],
        questions: [
            { question: "Qui est l'auteur de la psychanalyse ?", options: ["Descartes", "Platon", "Sigmund Freud", "Kant"], correctAnswer: 2, explanation: "Sigmund Freud est le père de la psychanalyse." }
        ]
    },
    {
        id: "term_ses_ose_croissance",
        level: "Terminale BACC",
        series: ["Série OSE"],
        subject: "SES",
        title: "Croissance et Développement Économique",
        summary: "Analyse du PIB, des facteurs de production et du développement durable.",
        lessons: [
            { title: "1. Le PIB", content: "Mesure la valeur ajoutée totale produite sur le territoire national." }
        ],
        practicalExercises: [
            { statement: "Définir la croissance économique.", correction: "Augmentation soutenue de la production de biens et services d'une nation." }
        ],
        questions: [
            { question: "Quel indicateur mesure la richesse globale créée ?", options: ["IDH", "PIB", "IPC", "Taux de chômage"], correctAnswer: 1, explanation: "Le PIB est l'indicateur clé de la croissance." }
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
