@echo off
setlocal enabledelayedexpansion
title EduSphere / i-baosy - Mise a jour MOD-06 (Backend Node.js API)

set LOG_FILE=update_log.txt
echo ==================================================== >> %LOG_FILE%
echo RAPPORT DE MISE A JOUR - ETAPE [MOD-06] (BACKEND API) >> %LOG_FILE%
echo Date : %DATE% - Heure : %TIME% >> %LOG_FILE%
echo ==================================================== >> %LOG_FILE%
echo. >> %LOG_FILE%

echo [1/4] Creation du fichier package.json pour le serveur Node.js...
(
echo {
echo   "name": "edusphere-ibaosy-backend",
echo   "version": "1.0.0",
echo   "description": "API Backend locale pour EduSphere / i-baosy",
echo   "main": "server.js",
echo   "scripts": {
echo     "start": "node server.js"
echo   },
echo   "dependencies": {
echo     "express": "^4.19.2",
echo     "cors": "^2.8.5"
echo   }
echo }
) > package.json
if %errorlevel% equ 0 (
    echo [SUCCES] package.json cree avec succes. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de creation de package.json. >> %LOG_FILE%
)

echo [2/4] Creation du serveur API local (server.js)...
(
echo const express = require(^'express^');
echo const cors = require(^'cors^');
echo const app = express();
echo const PORT = process.env.PORT || 3000;
echo 
echo app.use(cors());
echo app.use(express.json());
echo 
echo // Données mockees synchronisees avec l'application front-end
echo const chaptersData = [
echo     {
echo         id: "term_math_1",
echo         level: "Terminale BACC",
echo         subject: "Mathématiques",
echo         title: "Nombres Complexes et Géométrie",
echo         summary: "Les nombres complexes s'écrivent sous la forme z = a + ib. Leur module et leur argument permettent de résoudre des configurations géométriques."
echo     }
];
echo 
echo // Route API pour recuperer les chapitres
echo app.get(^'/api/chapters^', (req, res) =^> {
echo     res.json({ success: true, count: chaptersData.length, data: chaptersData });
echo });
echo 
echo // Route de test du serveur
echo app.get(^'/api/health^', (req, res) =^> {
echo     res.json({ status: "UP", service: "EduSphere API", timestamp: new Date() });
echo });
echo 
echo app.listen(PORT, () =^> {
echo     console.log(`Serveur EduSphere actif sur http://localhost:${PORT}`);
echo });
) > server.js
if %errorlevel% equ 0 (
    echo [SUCCES] server.js cree avec succes. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de creation de server.js. >> %LOG_FILE%
)

echo [3/4] Ajout d'un fichier .gitignore pour exclure les modules Node.js...
(
echo node_modules/
echo update_log.txt
) > .gitignore
if %errorlevel% equ 0 (
    echo [SUCCES] .gitignore configure avec succes. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de configuration .gitignore. >> %LOG_FILE%
)

echo [4/4] Synchronisation avec Git...
git add . >> %LOG_FILE% 2>&1
git commit -m "feat: implementation de MOD-06 serveur API Node.js et configuration backend local" >> %LOG_FILE% 2>&1
git push origin main >> %LOG_FILE% 2>&1
if %errorlevel% equ 0 (
    echo [SUCCES] Pousse Git effectuee avec succes. >> %LOG_FILE%
) else (
    echo [INFO] Erreur potentielle lors du push Git ou aucun changement majeur. >> %LOG_FILE%
)

echo Termine ! Etape [MOD-06] accomplie.
echo. >> %LOG_FILE%
echo Fin de l'etape MOD-06. >> %LOG_FILE%
pause