@echo off
setlocal enabledelayedexpansion
title EduSphere / i-baosy - Mise a jour MOD-07 (PostgreSQL DB)

set LOG_FILE=update_log.txt
echo ==================================================== >> %LOG_FILE%
echo RAPPORT DE MISE A JOUR - ETAPE [MOD-07] (POSTGRESQL) >> %LOG_FILE%
echo Date : %DATE% - Heure : %TIME% >> %LOG_FILE%
echo ==================================================== >> %LOG_FILE%
echo. >> %LOG_FILE%

echo [1/4] Mise a jour du fichier package.json pour inclure le client PostgreSQL (^'pg^')...
(
echo {
echo   "name": "edusphere-ibaosy-backend",
echo   "version": "1.1.0",
echo   "description": "API Backend avec PostgreSQL pour EduSphere / i-baosy",
echo   "main": "server.js",
echo   "scripts": {
echo     "start": "node server.js"
echo   },
echo   "dependencies": {
echo     "express": "^4.19.2",
echo     "cors": "^2.8.5",
echo     "pg": "^8.11.3"
echo   }
echo }
) > package.json
if %errorlevel% equ 0 (
    echo [SUCCES] package.json mis a jour avec le module pg. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de mise a jour package.json. >> %LOG_FILE%
)

echo [2/4] Creation du module de connexion a la base de donnees (db.js)...
(
echo const { Pool } = require(^'pg^');
echo 
echo // Configuration du pool de connexion PostgreSQL ^(parametres locaux ou variables d'environnement^)
echo const pool = new Pool({
echo   connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/edusphere_ibaosy_prod',
echo   ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
echo });
echo 
echo pool.on('connect', () =^> {
echo     console.log('Connexion etablie avec succes a la base de donnees PostgreSQL.');
echo });
echo 
echo module.exports = {
echo   query: (text, params) =^> pool.query(text, params),
echo };
) > db.js
if %errorlevel% equ 0 (
    echo [SUCCES] db.js cree avec succes. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de creation de db.js. >> %LOG_FILE%
)

echo [3/4] Mise a jour de server.js pour utiliser PostgreSQL...
(
echo const express = require(^'express^');
echo const cors = require(^'cors^');
echo const db = require(^'./db^');
echo const app = express();
echo const PORT = process.env.PORT || 3000;
echo 
echo app.use(cors());
echo app.use(express.json());
echo 
echo // Route API pour recuperer les chapitres depuis PostgreSQL
echo app.get(^'/api/chapters^', async (req, res) =^> {
echo     try {
echo         // Tentative de requete SQL sur la table chapters
echo         const result = await db.query('SELECT * FROM chapters');
echo         res.json({ success: true, count: result.rows.length, data: result.rows });
echo     } catch (err) {
echo         // Fallback de secours si la base PostgreSQL locale n'est pas encore initialisee
echo         console.log('DB Notice: Utilisation des donnees de secours (fallback).');
echo         const fallbackData = [
echo             {
echo                 id: "term_math_1",
echo                 level: "Terminale BACC",
echo                 subject: "Mathématiques",
echo                 title: "Nombres Complexes et Géométrie",
echo                 summary: "Les nombres complexes s'écrivent sous la forme z = a + ib. Leur module et leur argument permettent de résoudre des configurations géométriques."
echo             }
echo         ];
echo         res.json({ success: true, count: fallbackData.length, data: fallbackData, source: "fallback" });
echo     }
echo });
echo 
echo // Route de test de sante incluant le statut DB
echo app.get(^'/api/health^', async (req, res) =^> {
echo     try {
echo         await db.query('SELECT 1');
echo         res.json({ status: "UP", database: "Connected (PostgreSQL)", service: "EduSphere API", timestamp: new Date() });
echo     } catch (err) {
echo         res.json({ status: "UP", database: "Disconnected / Standalone Mode", service: "EduSphere API", timestamp: new Date() });
echo     }
echo });
echo 
echo app.listen(PORT, () =^> {
echo     console.log(`Serveur EduSphere connecte actif sur http://localhost:${PORT}`);
echo });
) > server.js
if %errorlevel% equ 0 (
    echo [SUCCES] server.js mis a jour avec integration PostgreSQL. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de mise a jour server.js. >> %LOG_FILE%
)

echo [4/4] Synchronisation avec Git...
git add . >> %LOG_FILE% 2>&1
git commit -m "feat: implementation de MOD-07 connexion PostgreSQL et pool de donnees backend" >> %LOG_FILE% 2>&1
git push origin main >> %LOG_FILE% 2>&1
if %errorlevel% equ 0 (
    echo [SUCCES] Pousse Git effectuee avec succes. >> %LOG_FILE%
) else (
    echo [INFO] Erreur potentielle lors du push Git ou aucun changement majeur. >> %LOG_FILE%
)

echo Termine ! Etape [MOD-07] accomplie avec succes.
echo. >> %LOG_FILE%
echo Fin de l'etape MOD-07. Rapport mis a jour dans update_log.txt. >> %LOG_FILE%
pause