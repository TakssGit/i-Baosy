const schoolDatabase = {
    levels: ["12ème", "11ème", "10ème", "9ème", "8ème", "7ème", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale BACC"],
    series: ["Série C", "Série D", "Série A1/A2", "Série OSE"],
    subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Histoire-Géographie", "Français", "Anglais", "Malagasy", "Philosophie", "SES"],
    chapters: [
        {
            id: "term_math_1",
            level: "Terminale BACC",
            subject: "Mathématiques",
            title: "Nombres Complexes et Géométrie",
            summary: "Les nombres complexes s'écrivent sous la forme z = a + ib. Leur module et leur argument permettent de résoudre des configurations géométriques au BACC.",
            questions: [
                { question: "Quelle est la forme algébrique d'un nombre complexe z ?", options: ["a + ib", "a + b²", "a × i", "Inconnue"], correctAnswer: 0, explanation: "La forme algébrique standard est z = a + ib avec 'a' la partie réelle et 'b' la partie imaginaire." },
                { question: "Que vaut i² dans l'ensemble des nombres complexes ?", options: ["1", "-1", "0", "i"], correctAnswer: 1, explanation: "Par définition fondamentale de l'ensemble C des nombres complexes, i² est égal à -1." }
            ]
        },
        {
            id: "term_bacc_annale_2025",
            level: "Terminale BACC",
            subject: "Mathématiques",
            title: "Annales BACC - Épreuve Officielle (Partie I)",
            summary: "Sujet type BACC officiel récapitulant l'analyse de fonctions exponentielles et logarithmes népériens.",
            questions: [
                { question: "Quelle est la dérivée de f(x) = e^(2x) ?", options: ["e^(2x)", "2e^(2x)", "2e^x", "e^x"], correctAnswer: 1, explanation: "La dérivée de e^(u(x)) est u'(x)e^(u(x)). Ici u(x)=2x donc u'(x)=2, ce qui donne 2e^(2x)." },
                { question: "Quelle est la limite de ln(x) quand x tend vers +∞ ?", options: ["0", "1", "+∞", "-∞"], correctAnswer: 2, explanation: "La fonction logarithme népérien croît indéfiniment vers l'infini quand x tend vers +∞." }
            ]
        }
    ]
};
