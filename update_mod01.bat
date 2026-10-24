@echo off
setlocal enabledelayedexpansion
title Lycée i-baosy - Correction & Mise a jour index.html

set LOG_FILE=update_log.txt
echo ==================================================== >> %LOG_FILE%
echo RAPPORT DE CORRECTION - FICHIER index.html (THEME CLAIR) >> %LOG_FILE%
echo Date : %DATE% - Heure : %TIME% >> %LOG_FILE%
echo ==================================================== >> %LOG_FILE%
echo. >> %LOG_FILE%

echo [1/2] Ecriture du fichier index.html en Theme Clair...
(
echo ^<!DOCTYPE html^>
echo ^<html lang="fr"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>Lycée i-baosy - Portail PWA & Révisions^</title^>
echo     ^<script src="https://cdn.tailwindcss.com"^>^</script^>
echo     ^<link rel="manifest" href="manifest.json"^>
echo ^</head^>
echo ^<body class="bg-slate-100 text-slate-800 min-h-screen font-sans flex flex-col justify-between antialiased"^>
echo     ^<header class="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50"^>
echo         ^<div class="flex items-center space-x-3 cursor-pointer" onclick="setView('home')"^>
echo             ^<span class="text-3xl"^>🏫^</span^>
echo             ^<div^>
echo                 ^<div class="flex items-center space-x-2"^>
echo                     ^<h1 class="text-xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"^>Lycée i-baosy^</h1^>
echo                     ^<span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-200"^>Officiel^</span^>
echo                 ^</div^>
echo                 ^<p class="text-xs text-slate-500 font-medium"^>Portail PWA Pédagogique & Institutionnel^</p^>
echo             ^</div^>
echo         ^</div^>
echo         ^<nav class="flex items-center space-x-2 sm:space-x-4"^>
echo             ^<button onclick="setView('home')" class="text-xs sm:text-sm text-slate-600 hover:text-blue-700 font-semibold transition px-2 py-1">Accueil</button^>
echo             ^<button onclick="setView('free_practice')" class="text-xs sm:text-sm text-blue-700 hover:text-blue-800 font-bold bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl border border-blue-200 transition">🎯 Quiz Libres</button^>
echo             ^<button onclick="setView('profile')" class="text-xs sm:text-sm text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition">Carnet</button^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main id="app-container" class="max-w-4xl w-full mx-auto p-4 sm:p-6 flex-grow"^>^</main^>
echo     ^<footer class="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500 shadow-inner mt-8"^>
echo         ^<div class="inline-block bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-200 font-mono text-slate-600 font-medium"^>
echo             Établissement Lycée i-baosy © 2026 — Plateforme d'Apprentissage Hors-Ligne 100% Sécurisée
echo         ^</div^>
echo     ^</footer^>
echo     ^<!-- Chargement des modules db/ --^>
echo     ^<script src="db/metadata.js"^>^</script^>
echo     ^<script src="db/chapters.js"^>^</script^>
echo     ^<script src="db/users.js"^>^</script^>
echo     ^<script src="app.js"^>^</script^>
echo     ^<script^>
echo         if ('serviceWorker' in navigator) {
echo             window.addEventListener('load', () =^> {
echo                 navigator.serviceWorker.register('./sw.js').catch(err =^> console.log(err));
echo             });
echo         }
echo     ^</script^>
echo ^</body^>
echo ^</html^>
) > index.html
if %errorlevel% equ 0 (
    echo [SUCCES] index.html mis a jour en theme clair. >> %LOG_FILE%
) else (
    echo [ERREUR] echec de index.html. >> %LOG_FILE%
)

echo [2/2] Synchronisation Git...
git add index.html update_log.txt >> %LOG_FILE% 2>&1
git commit -m "fix: mise a jour forcee de index.html vers le theme clair lumineux" >> %LOG_FILE% 2>&1
git push origin main >> %LOG_FILE% 2>&1
if %errorlevel% equ 0 (
    echo [SUCCES] Git push effectue avec succes. >> %LOG_FILE%
) else (
    echo [INFO] Git push termine. >> %LOG_FILE%
)

echo Correction terminee avec succes !
echo. >> %LOG_FILE%
echo Fin de la correction index.html. >> %LOG_FILE%
pause