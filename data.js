const schoolDatabase = {
    levels: ["12ème", "11ème", "10ème", "9ème", "8ème", "7ème", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale BACC"],
    baccSeries: ["Série A1", "Série A2", "Série C", "Série D", "Série OSE"],
    subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Histoire-Géographie", "Français", "Anglais", "Malagasy", "Philosophie", "SES"],
    chapters: [
        {
            id: "elem_math_12",
            level: "12ème",
            subject: "Mathématiques",
            title: "Les Nombres Entiers et Calcul Élémentaire",
            summary: "Initiation à la numération, addition et soustraction des nombres de 0 à 100.",
            questions: [
                { question: "Combien font 15 + 25 ?", options: ["30", "35", "40", "45"], correctAnswer: 2, explanation: "15 + 25 = 40. L'addition regroupe les dizaines (10+20=30) et les unités (5+5=10)." }
            ]
        },
        {
            id: "coll_math_3",
            level: "3ème",
            subject: "Mathématiques",
            title: "Théorème de Pythagore et Trigonométrie",
            summary: "Propriétés du triangle rectangle et calcul des longueurs d'angles pour le Brevet.",
            questions: [
                { question: "Dans un triangle rectangle, l'égalité de Pythagore s'écrit :", options: ["a² = b² + c²", "a + b = c", "a² + b² = c² (avec c l'hypoténuse)", "a = b²"], correctAnswer: 2, explanation: "Le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés." }
            ]
        },
        {
            id: "term_math_c_d",
            level: "Terminale BACC",
            series: ["Série C", "Série D"],
            subject: "Mathématiques",
            title: "Analyse et Nombres Complexes (Séries C & D)",
            summary: "Étude approfondie des fonctions exponentielles, logarithmes et des nombres complexes appliqués à la géométrie.",
            questions: [
                { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "25", "3"], correctAnswer: 0, explanation: "Le module est |z| = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5." }
            ]
        },
        {
            id: "term_philo_a",
            level: "Terminale BACC",
            series: ["Série A1", "Série A2"],
            subject: "Philosophie",
            title: "La Conscience et l'Inconscient",
            summary: "Notions philosophiques fondamentales pour les séries littéraires (A1/A2).",
            questions: [
                { question: "Qui est le principal théoricien de l'inconscient en psychanalyse ?", options: ["Descartes", "Sigmund Freud", "Platon", "Kant"], correctAnswer: 1, explanation: "Sigmund Freud a fondé la psychanalyse et mis en évidence l'appareil psychique inconscient." }
            ]
        },
        {
            id: "term_ses_ose",
            level: "Terminale BACC",
            series: ["Série OSE"],
            subject: "SES",
            title: "Croissance Économique et Développement",
            summary: "Analyse des facteurs de production, du PIB et des mutations politiques et sociales contemporaines.",
            questions: [
                { question: "Quel indicateur mesure la richesse créée par un pays en une année ?", options: ["IDH", "PIB", "IPC", "Dette Publique"], correctAnswer: 1, explanation: "Le Produit Intérieur Brut (PIB) mesure la valeur totale de la production interne de biens et services." }
            ]
        }
    ]
};
