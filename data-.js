const schoolDatabase = {
    levels: [
        "12ème", "11ème", "10ème", "9ème", "8ème", "7ème", 
        "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale BACC"
    ],
    subjects: [
        "Mathématiques", "Physique-Chimie", "SVT", 
        "Histoire-Géographie", "Français", "Anglais", 
        "Malagasy", "Philosophie", "SES"
    ],
    chapters: [
        {
            id: "term_math_1",
            level: "Terminale BACC",
            subject: "Mathématiques",
            title: "Nombres Complexes et Géométrie",
            summary: "Les nombres complexes s'écrivent sous la forme z = a + ib. Leur module et leur argument permettent de résoudre des configurations géométriques dans le plan complexe de manière algébrique et trigonométrique.",
            questions: [
                {
                    question: "Quelle est la forme algébrique d'un nombre complexe z ?",
                    options: ["a + ib", "a + b²", "a × i", "Inconnue"],
                    correctAnswer: 0
                },
                {
                    question: "Que vaut i² dans l'ensemble des nombres complexes ?",
                    options: ["1", "-1", "0", "i"],
                    correctAnswer: 1
                }
            ]
        },
        {
            id: "troisieme_pc_1",
            level: "3ème",
            subject: "Physique-Chimie",
            title: "Ohm et Circuits Électriques",
            summary: "La loi d'Ohm établit la relation entre la tension U aux bornes d'un conducteur ohmique, l'intensité du courant I qui le traverse et sa résistance R. La formule fondamentale est U = R × I.",
            questions: [
                {
                    question: "Quelle est la formule de la loi d'Ohm ?",
                    options: ["U = R / I", "U = R × I", "P = U × I", "R = U + I"],
                    correctAnswer: 1
                },
                {
                    question: "Quelle est l'unité de la résistance électrique ?",
                    options: ["Volt (V)", "Ampère (A)", "Ohm (Ω)", "Watt (W)"],
                    correctAnswer: 2
                }
            ]
        }
    ]
};