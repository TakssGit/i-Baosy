const schoolDatabase = {
    levels: ["12ème", "11ème", "10ème", "9ème", "8ème", "7ème", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale BACC"],
    subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Histoire-Géographie", "Français", "Anglais", "Malagasy", "Philosophie", "SES"],
    chapters: [
        {
            id: "term_math_1",
            level: "Terminale BACC",
            subject: "Mathématiques",
            title: "Nombres Complexes et Géométrie",
            summary: "Les nombres complexes s'ecrivent sous la forme z = a + ib. Leur module et leur argument permettent de resoudre des configurations geometriques.",
            questions: [
                { question: "Quelle est la forme algebrique d'un nombre complexe z ?", options: ["a + ib", "a + b²", "a × i", "Inconnue"], correctAnswer: 0 },
                { question: "Que vaut i² dans l'ensemble des nombres complexes ?", options: ["1", "-1", "0", "i"], correctAnswer: 1 }
            ]
        }
    ]
};
