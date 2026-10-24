const schoolDatabase = {
  levels: [
    "12ème", "11ème", "10ème", "9ème", "8ème", "7ème", 
    "6ème", "5ème", "4ème", "3ème", "Seconde", "Première", "Terminale BACC"
  ],
  subjects: [
    "Mathématiques", "Physique-Chimie", "SVT", "Français", 
    "Histoire-Géographie", "Anglais", "Philosophie", "Informatique", "Économie-Gestion"
  ],
  chapters: [
    // --- TERMINALE BACC ---
    {
      id: "term_math_1",
      level: "Terminale BACC",
      subject: "Mathématiques",
      title: "Fonctions Logarithmes et Exponentielles",
      summary: "Étude approfondie des fonctions logarithme népérien et exponentielle, leurs propriétés algébriques, dérivées, limites remarquables et comportements asymptotiques.",
      questions: [
        {
          question: "Quel est le domaine de définition de ln(x) ?",
          options: ["]-∞, +∞[", "[0, +∞[", "]0, +∞[", "]-∞, 0["],
          correctAnswer: 2,
          explanation: "Le logarithme népérien est strictement défini pour les réels strictement positifs."
        },
        {
          question: "Que vaut la dérivée de ln(x) ?",
          options: ["1/x", "x", "e^x", "0"],
          correctAnswer: 0,
          explanation: "La dérivée de ln(x) pour x > 0 est 1/x."
        }
      ]
    },
    {
      id: "term_phys_1",
      level: "Terminale BACC",
      subject: "Physique-Chimie",
      title: "Mécanique : Lois de Newton et Oscillateurs",
      summary: "Application de la deuxième loi de Newton dans les référentiels galiléens, étude des chutes libres, plans inclinés et systèmes oscillants mécaniques.",
      questions: [
        {
          question: "Quelle est l'expression de la deuxième loi de Newton ?",
          options: ["ΣF = m × v", "ΣF = m × a", "P = m × g", "E = 1/2 m v²"],
          correctAnswer: 1,
          explanation: "La somme des forces extérieures est égale au produit de la masse par l'accélération."
        }
      ]
    },
    {
      id: "term_philo_1",
      level: "Terminale BACC",
      subject: "Philosophie",
      title: "La Conscience et l'Inconscient",
      summary: "Analyse de la conscience de soi, de la subjectivité cartésienne et de la découverte freudienne de l'inconscient remettant en cause la transparence du sujet.",
      questions: [
        {
          question: "Quel philosophe est célèbre pour le 'Cogito, ergo sum' (Je pense, donc je suis) ?",
          options: ["Kant", "Descartes", "Nietzsche", "Freud"],
          correctAnswer: 1,
          explanation: "René Descartes fonde la certitude de la conscience sur le cogito."
        }
      ]
    },
    {
      id: "term_eco_1",
      level: "Terminale BACC",
      subject: "Économie-Gestion",
      title: "Croissance, Développement et Mondialisation",
      summary: "Étude des sources de la croissance économique, des indicateurs de développement (PIB, IDH) et des impacts de la mondialisation sur les économies nationales.",
      questions: [
        {
          question: "Que mesure l'IDH (Indice de Développement Humain) ?",
          options: ["Uniquement la richesse monétaire", "La longévité, l'éducation et le niveau de vie", "Le taux de chômage", "La dette publique"],
          correctAnswer: 1,
          explanation: "L'IDH combine la santé/longévité, l'accès au savoir et un niveau de vie décent."
        }
      ]
    },

    // --- PREMIÈRE ---
    {
      id: "prem_math_1",
      level: "Première",
      subject: "Mathématiques",
      title: "Second Degré et Variations",
      summary: "Étude des polynômes du second degré (ax² + bx + c), calcul du discriminant (delta), racines réelles et étude du signe de la parabole.",
      questions: [
        {
          question: "Quelle est la formule du discriminant (delta) d'un trinôme du second degré ?",
          options: ["b² - 4ac", "b² + 4ac", "2b - 4ac", "a² - 4bc"],
          correctAnswer: 0,
          explanation: "Le discriminant delta se calcule par la formule b² - 4ac."
        }
      ]
    },
    {
      id: "prem_svt_1",
      level: "Première",
      subject: "SVT",
      title: "La Génétique et la Division Cellulaire",
      summary: "Structure de l'ADN, réplication, transcription, traduction et mécanismes de la mitose et de la méiose au cours du cycle cellulaire.",
      questions: [
        {
          question: "Quel est le support moléculaire de l'information génétique ?",
          options: ["L'ARN", "L'ADN", "Les protéines", "Les glucides"],
          correctAnswer: 1,
          explanation: "L'ADN (acide désoxyribonucléique) porte l'information génétique des cellules."
        }
      ]
    },

    // --- SECONDE ---
    {
      id: "sec_phys_1",
      level: "Seconde",
      subject: "Physique-Chimie",
      title: "La Mole et les Quantités de Matière",
      summary: "Introduction à la mole, masse molaire, volume molaire des gaz et concentrations molaire et massique en solution aqueuse.",
      questions: [
        {
          question: "Combien d'entités contient une mole de matière (Constante d'Avogadro) ?",
          options: ["6,02 × 10^20", "6,02 × 10^23", "3,14 × 10^10", "10^6"],
          correctAnswer: 1,
          explanation: "La constante d'Avogadro est environ de 6,022 × 10^23 mol^-1."
        }
      ]
    },
    {
      id: "sec_info_1",
      level: "Seconde",
      subject: "Informatique",
      title: "Algorithmique et Programmation de Base",
      summary: "Notions de variables, types de données, structures conditionnelles (if/else) et boucles (for/while) en programmation.",
      questions: [
        {
          question: "À quoi sert une structure conditionnelle 'if' en programmation ?",
          options: ["À répéter une action", "À exécuter un bloc de code selon qu'une condition est vraie ou fausse", "À stocker un fichier", "À créer une base de données"],
          correctAnswer: 1,
          explanation: "Le 'if' permet d'orienter l'exécution du code en testant une condition logique."
        }
      ]
    },

    // --- 3ÈME ---
    {
      id: "3eme_math_1",
      level: "3ème",
      subject: "Mathématiques",
      title: "Théorème de Thalès et Pythagore",
      summary: "Maîtrise des relations métriques dans le triangle rectangle (Pythagore) et des configurations de triangles emboîtés (Thalès).",
      questions: [
        {
          question: "Dans un triangle rectangle, quel côté est le plus long ?",
          options: ["Le côté opposé", "L'hypoténuse", "Le côté adjacent", "La hauteur"],
          correctAnswer: 1,
          explanation: "L'hypoténuse est toujours le plus grand côté, opposé à l'angle droit."
        }
      ]
    },
    {
      id: "3eme_hist_1",
      level: "3ème",
      subject: "Histoire-Géographie",
      title: "La Seconde Guerre Mondiale (1939-1945)",
      summary: "Les grandes phases du conflit mondial, les régimes totalitaires, la guerre anéantissement et la création de l'ONU.",
      questions: [
        {
          question: "En quelle année s'achève la Seconde Guerre mondiale en Europe ?",
          options: ["1942", "1944", "1945", "1950"],
          correctAnswer: 2,
          explanation: "La guerre prend fin en mai 1945 en Europe suite à la capitulation de l'Allemagne."
        }
      ]
    },

    // --- 6ÈME ---
    {
      id: "6eme_svt_1",
      level: "6ème",
      subject: "SVT",
      title: "Le peuplement d'un milieu et besoins des végétaux",
      summary: "Découverte de la biodiversité locale, des relations entre êtres vivants et de l'importance de l'eau et de la lumière pour les plantes chlorophylliennes.",
      questions: [
        {
          question: "De quoi ont principalement besoin les plantes vertes pour grandir ?",
          options: ["Eau, minéraux, lumière, CO2", "Uniquement de terre", "Uniquement d'obscurité", "De viande"],
          correctAnswer: 0,
          explanation: "Les végétaux réalisent la photosynthèse grâce à l'eau, aux minéraux, au CO2 et à la lumière."
        }
      ]
    },
    {
      id: "6eme_ang_1",
      level: "6ème",
      subject: "Anglais",
      title: "Introductions and Daily Routines",
      summary: "Apprentissage des salutations de base, de la présentation personnelle et vocabulaire des activités quotidiennes au présent simple.",
      questions: [
        {
          question: "Comment traduit-on 'Good morning' en français ?",
          options: ["Bonsoir", "Bonjour (le matin)", "Bonne nuit", "Au revoir"],
          correctAnswer: 1,
          explanation: "'Good morning' s'utilise le matin pour saluer quelqu'un."
        }
      ]
    },

    // --- 12ÈME / 7ÈME (Niveaux de base) ---
    {
      id: "7eme_francais_1",
      level: "7ème",
      subject: "Français",
      title: "Les Classes de Mots et la Conjugaison",
      summary: "Étude des natures de mots (nom, verbe, adjectif, pronom) et des temps simples de l'indicatif (présent, imparfait, futur).",
      questions: [
        {
          question: "Quel est le rôle d'un adjectif qualificatif dans la phrase ?",
          options: ["Il indique une action", "Il apporte des précisions sur le nom", "Il remplace un nom", "Il relie deux propositions"],
          correctAnswer: 1,
          explanation: "L'adjectif qualifie le nom ou le pronom auquel il se rapporte."
        }
      ]
    }
  ]
};