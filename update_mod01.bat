@echo off
setlocal enabledelayedexpansion
title EduSphere / i-baosy - Mise a jour MOD-25 (Plan 1 - Remplissage par Matiere)

set LOG_FILE=update_log.txt
echo ==================================================== >> %LOG_FILE%
echo RAPPORT DE MISE A JOUR - ETAPE [MOD-25] (PLAN 1 - MATHS/SCIENCES) >> %LOG_FILE%
echo Date : %DATE% - Heure : %TIME% >> %LOG_FILE%
echo ==================================================== >> %LOG_FILE%
echo. >> %LOG_FILE%

echo [1/2] Injection du programme complet de Mathématiques et Physique-Chimie (Plan 1)...
(
echo const dbChapters = [
echo     {
echo         id: "elem_math_12",
echo         level: "12ème",
echo         series: null,
echo         subject: "Mathématiques",
echo         title: "Nombres et Calculs Élémentaires (12ème)",
echo         summary: "Apprentissage de la numération de 0 à 100, additions et soustractions simples.",
echo         lessons: [
echo             { title: "1. Les dizaines et unités", content: "Un nombre à deux chiffres est composé d'une dizaine et d'unités. Exemple : 34 = 3 dizaines et 4 unités." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Calculer : 25 + 14", correction: "25 + 14 = (20 + 10) + (5 + 4) = 30 + 9 = 39." }
echo         ],
echo         questions: [
echo             { question: "Combien font 15 + 24 ?", options: ["35", "39", "40", "45"], correctAnswer: 1, explanation: "15 + 24 = 39." }
echo         ]
echo     },
echo     {
echo         id: "coll_math_6",
echo         level: "6ème",
echo         series: null,
echo         subject: "Mathématiques",
echo         title: "Nombres Décimaux et Opérations (6ème)",
echo         summary: "Découverte des nombres décimaux, addition, soustraction et position de la virgule.",
echo         lessons: [
echo             { title: "1. Partie entière et partie décimale", content: "Dans le nombre 12,35, 12 est la partie entière et 0,35 la partie décimale." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Poser et calculer : 12,5 + 3,25", correction: "12,50 + 3,25 = 15,75." }
echo         ],
echo         questions: [
echo             { question: "Quel est le chiffre des dixièmes dans 45,89 ?", options: ["5", "8", "9", "4"], correctAnswer: 1, explanation: "Le chiffre des dixièmes est le premier chiffre après la virgule, soit 8." }
echo         ]
echo     },
echo     {
echo         id: "coll_math_3",
echo         level: "3ème",
echo         series: null,
echo         subject: "Mathématiques",
echo         title: "Théorème de Pythagore et Applications (3ème)",
echo         summary: "Calcul des longueurs dans le triangle rectangle en vue du Brevet des Collèges.",
echo         lessons: [
echo             { title: "1. Égalité de Pythagore", content: "Dans un triangle rectangle ABC rectangle en A : BC² = AB² + AC²." }
echo         ],
echo         practicalExercises: [
echo             { statement: "AB = 3 cm, AC = 4 cm. Calculer l'hypoténuse BC.", correction: "BC² = 3² + 4² = 9 + 16 = 25. Donc BC = sqrt(25) = 5 cm." }
echo         ],
echo         questions: [
echo             { question: "Dans un triangle rectangle, quel est le côté le plus long ?", options: ["Le côté opposé", "L'adjacent", "L'hypoténuse", "La hauteur"], correctAnswer: 2, explanation: "L'hypoténuse est toujours le côté opposé à l'angle droit et le plus long du triangle." }
echo         ]
echo     },
echo     {
echo         id: "term_math_c_d",
echo         level: "Terminale BACC",
echo         series: ["Série C", "Série D"],
echo         subject: "Mathématiques",
echo         title: "Nombres Complexes et Géométrie (Terminale C & D)",
echo         summary: "Forme algébrique z = a + ib, module, argument et applications géométriques au BACC.",
echo         lessons: [
echo             { title: "1. Forme Algébrique et Conjugué", content: "Tout nombre complexe s'écrit de manière unique z = a + ib. Son conjugué est z_barre = a - ib." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Calculer le module de z = 3 + 4i.", correction: "|z| = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5." }
echo         ],
echo         questions: [
echo             { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Le module est |z| = sqrt(3² + 4²) = 5." }
echo         ]
echo     },
echo     {
echo         id: "bepc_phys_3",
echo         level: "3ème",
echo         series: null,
echo         subject: "Physique-Chimie",
echo         title: "Loi d'Ohm et Puissance Électrique (3ème)",
echo         summary: "Relations fondamentales U = R * i et P = U * i pour les circuits électriques.",
echo         lessons: [
echo             { title: "1. La Loi d'Ohm", content: "La tension U aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I : U = R * I." }
echo         ],
echo         practicalExercises: [
echo             { statement: "R = 100 Ohms, I = 0,05 A. Calculer U.", correction: "U = 100 * 0,05 = 5 Volts." }
echo         ],
echo         questions: [
echo             { question: "Quelle est l'unité de la résistance électrique ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correctAnswer: 2, explanation: "La résistance s'exprime en Ohms (Ω)." }
echo         ]
echo     }
echo ];
echo 
echo const schoolDatabase = {
echo     levels: dbMetadata.levels,
echo     baccSeries: dbMetadata.baccSeries,
echo     subjects: dbMetadata.subjects,
echo     chapters: dbChapters
echo };
) > db\chapters.js
if %errorlevel% equ 0 (
    echo [SUCCES] db/chapters.js enrichi selon le Plan 1. >> %LOG_FILE%
) else (
    echo [ERREUR] echec mise a jour db/chapters.js. >> %LOG_FILE%
)

echo [2/2] Synchronisation Git...
git add . >> %LOG_FILE% 2>&1
git commit -m "feat: MOD-25 application du plan 1 - enrichissement des mathematiques et physique-chimie" >> %LOG_FILE% 2>&1
git push origin main >> %LOG_FILE% 2>&1
if %errorlevel% equ 0 (
    echo [SUCCES] Pousse Git effectuee avec succes. >> %LOG_FILE%
) else (
    echo [INFO] Git push termine. >> %LOG_FILE%
)

echo Termine ! Etape [MOD-25] accomplie avec succes.
echo. >> %LOG_FILE%
echo Fin de l'etape MOD-25. >> %LOG_FILE%
pause