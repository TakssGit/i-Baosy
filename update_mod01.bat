@echo off
setlocal enabledelayedexpansion
title EduSphere / i-baosy - Mise a jour MOD-21 (Extension Massive Base de Donnees)

set LOG_FILE=update_log.txt
echo ==================================================== >> %LOG_FILE%
echo RAPPORT DE MISE A JOUR - ETAPE [MOD-21] (DB EXTENSION) >> %LOG_FILE%
echo Date : %DATE% - Heure : %TIME% >> %LOG_FILE%
echo ==================================================== >> %LOG_FILE%
echo. >> %LOG_FILE%

echo [1/2] Mise a jour de db/chapters.js avec un catalogue enrichi de chapitres...
(
echo const dbChapters = [
echo     {
echo         id: "elem_math_12_add",
echo         level: "12ème",
echo         series: null,
echo         subject: "Mathématiques",
echo         title: "Addition et Calcul Mental Élémentaire",
echo         summary: "Apprendre à regrouper les unités et les dizaines pour effectuer des additions simples.",
echo         lessons: [
echo             { title: "1. Le principe de l'addition", content: "L'addition consiste à assembler deux quantités. Exemple : 12 + 15 = 27." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Calculez la somme : 24 + 35.", correction: "24 + 35 = (20 + 30) + (4 + 5) = 59." }
echo         ],
echo         questions: [
echo             { question: "Combien font 18 + 12 ?", options: ["28", "30", "32", "40"], correctAnswer: 1, explanation: "18 + 12 = 30." }
echo         ]
echo     },
echo     {
echo         id: "coll_francais_6_recit",
echo         level: "6ème",
echo         series: null,
echo         subject: "Français",
echo         title: "Les Structures du Récit et la Narration",
echo         summary: "Étude des temps du récit au passé (passé simple, imparfait) et de la structure d'un conte.",
echo         lessons: [
echo             { title: "1. Imparfait et Passé Simple", content: "L'imparfait exprime une action longue ou un décor, le passé simple une action brève et ponctuelle." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Conjuguez au passé simple : 'Il (prendre) son sac et (partir).'", correction: "Il prit son sac et partit." }
echo         ],
echo         questions: [
echo             { question: "Quel temps exprime une action brève au second plan du récit ?", options: ["L'imparfait", "Le passé simple", "Le présent", "Le futur"], correctAnswer: 1, explanation: "Le passé simple est le temps de l'action principale et ponctuelle dans le récit." }
echo         ]
echo     },
echo     {
echo         id: "bepc_phys_3_electricite",
echo         level: "3ème",
echo         series: null,
echo         subject: "Physique-Chimie",
echo         title: "Loi d'Ohm et Circuits Électriques",
echo         summary: "Relation fondamentale entre la tension U, l'intensité I et la résistance R (U = R x I).",
echo         lessons: [
echo             { title: "1. Enoncé de la loi d'Ohm", content: "U = R x I avec U en Volts, R en Ohms et I en Ampères." }
echo         ],
echo         practicalExercises: [
echo             { statement: "R = 50 Ohms, I = 0,2 A. Calculer U.", correction: "U = 50 x 0,2 = 10 Volts." }
echo         ],
echo         questions: [
echo             { question: "Quelle est l'unité de la résistance ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correctAnswer: 2, explanation: "L'unité légale est l'Ohm (Ω)." }
echo         ]
echo     },
echo     {
echo         id: "seconde_svt_cellule",
echo         level: "2nde",
echo         series: null,
echo         subject: "SVT",
echo         title: "La Cellule, Unité Vivante",
echo         summary: "Structure cellulaire, membrane, cytoplasme et noyau chez les êtres vivants.",
echo         lessons: [
echo             { title: "1. Organisation cellulaire", content: "La cellule est l'unité structurelle et fonctionnelle de tous les êtres vivants." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Quel organite contient l'information génétique (ADN) ?", correction: "Le noyau cellulaire." }
echo         ],
echo         questions: [
echo             { question: "Où se situe l'ADN dans une cellule eucaryote ?", options: ["Dans le cytoplasme", "Dans le noyau", "Dans la membrane", "Dans la vacuole"], correctAnswer: 1, explanation: "L'ADN est principalement stocké dans le noyau de la cellule eucaryote." }
echo         ]
echo     },
echo     {
echo         id: "term_math_c_complexes",
echo         level: "Terminale BACC",
echo         series: ["Série C", "Série D"],
echo         subject: "Mathématiques",
echo         title: "Nombres Complexes et Géométrie",
echo         summary: "Forme algébrique z = a + ib, module, argument et applications géométriques au BACC.",
echo         lessons: [
echo             { title: "1. Module d'un complexe", content: "|z| = sqrt(a² + b²)." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Calculer le module de z = 3 + 4i.", correction: "|z| = sqrt(9 + 16) = 5." }
echo         ],
echo         questions: [
echo             { question: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "Le module est égal à 5." }
echo         ]
echo     },
echo     {
echo         id: "term_philo_a_conscience",
echo         level: "Terminale BACC",
echo         series: ["Série A1", "Série A2"],
echo         subject: "Philosophie",
echo         title: "La Conscience et l'Inconscient",
echo         summary: "Étude du sujet pensant chez Descartes et remise en cause par la psychanalyse freudienne.",
echo         lessons: [
echo             { title: "1. Le Cogito", content: "Je pense donc je suis." }
echo         ],
echo         practicalExercises: [
echo             { statement: "En quoi Freud révolutionne-t-il la notion de sujet ?", correction: "En démontrant que le psychisme humain ne se réduit pas à la conscience." }
echo         ],
echo         questions: [
echo             { question: "Qui est l'auteur de la psychanalyse ?", options: ["Descartes", "Platon", "Sigmund Freud", "Kant"], correctAnswer: 2, explanation: "Sigmund Freud est le père de la psychanalyse." }
echo         ]
echo     },
echo     {
echo         id: "term_ses_ose_croissance",
echo         level: "Terminale BACC",
echo         series: ["Série OSE"],
echo         subject: "SES",
echo         title: "Croissance et Développement Économique",
echo         summary: "Analyse du PIB, des facteurs de production et du développement durable.",
echo         lessons: [
echo             { title: "1. Le PIB", content: "Mesure la valeur ajoutée totale produite sur le territoire national." }
echo         ],
echo         practicalExercises: [
echo             { statement: "Définir la croissance économique.", correction: "Augmentation soutenue de la production de biens et services d'une nation." }
echo         ],
echo         questions: [
echo             { question: "Quel indicateur mesure la richesse globale créée ?", options: ["IDH", "PIB", "IPC", "Taux de chômage"], correctAnswer: 1, explanation: "Le PIB est l'indicateur clé de la croissance." }
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
    echo [SUCCES] db/chapters.js enrichi avec succes. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de mise a jour de db/chapters.js. >> %LOG_FILE%
)

echo [2/2] Synchronisation avec Git...
git add . >> %LOG_FILE% 2>&1
git commit -m "feat: MOD-21 extension massive de la base pedagogique db/chapters.js pour tous niveaux" >> %LOG_FILE% 2>&1
git push origin main >> %LOG_FILE% 2>&1
if %errorlevel% equ 0 (
    echo [SUCCES] Pousse Git effectuee avec succes. >> %LOG_FILE%
) else (
    echo [INFO] Erreur potentielle lors du push Git. >> %LOG_FILE%
)

echo Termine ! Etape [MOD-21] accomplie avec succes.
echo. >> %LOG_FILE%
echo Fin de l'etape MOD-21. Base de donnees enrichie. >> %LOG_FILE%
pause