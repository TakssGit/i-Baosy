const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new AudioCtx();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (type === 'click') {
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
            osc.start(); osc.stop(audioCtx.currentTime + 0.04);
        } else if (type === 'success') {
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
            osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
            osc.start(); osc.stop(audioCtx.currentTime + 0.25);
        } else if (type === 'error') {
            osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
            osc.start(); osc.stop(audioCtx.currentTime + 0.15);
        }
    } catch (e) { console.log("Audio error"); }
}

let allProfiles = dbUsers.getProfiles();
let currentProfileObj = dbUsers.getActiveProfile();
let currentProfile = currentProfileObj ? currentProfileObj.prenom : null;

let currentView = (!currentProfile || allProfiles.length === 0) ? 'profiles' : 'home';
let userProgress = dbUsers.getProgress(currentProfile);

let selectedLevel = null;
let selectedSeries = null;
let selectedSubject = null;
let selectedChapter = null;
let currentQuizIndex = 0;
let userScore = 0;
let speechRate = 1.0;
let selectedAnswerIndex = null;

// Helpers pour Avatars et Couleurs de Thème par Âge, Genre et Classe
function getUniversalAvatar(genre, age) {
    const a = parseInt(age) || 15;
    if (genre === 'Fille') {
        return a < 13 ? '👧' : (a < 18 ? '👩‍🎓' : '👩‍🏫');
    } else {
        return a < 13 ? '👦' : (a < 18 ? '👨‍🎓' : '👨‍🏫');
    }
}

function getThemeGradient(genre, classe) {
    if (classe && classe.includes('Terminale')) return 'from-purple-700 via-indigo-700 to-blue-800';
    if (classe && (classe.includes('6ème') || classe.includes('5ème') || classe.includes('4ème') || classe.includes('3ème'))) return 'from-blue-600 via-cyan-600 to-teal-700';
    if (genre === 'Fille') return 'from-rose-600 via-pink-600 to-purple-700';
    return 'from-blue-700 via-indigo-700 to-indigo-800';
}

function saveProgress() {
    if (currentProfile) {
        dbUsers.saveProgress(currentProfile, userProgress);
        dbUsers.saveProfiles(allProfiles);
    }
}

function setView(v) { 
    if (!currentProfile && v !== 'profiles') {
        alert('Veuillez créer ou sélectionner un profil avant de continuer.');
        currentView = 'profiles';
    } else {
        currentView = v;
    }
    playSound('click'); 
    render(); 
    window.scrollTo({top: 0, behavior: 'smooth'}); 
}

function render() {
    const container = document.getElementById('app-container');
    if (!container) return;

    if ((!currentProfile || allProfiles.length === 0) && currentView !== 'profiles') {
        currentView = 'profiles';
    }
    
    if (currentView === 'profiles') {
        container.innerHTML = `
            <div class="max-w-md mx-auto bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl text-center space-y-6 mt-6">
                <div class="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-3xl mx-auto border border-blue-200 shadow-sm">👤</div>
                <h2 class="text-2xl font-extrabold text-slate-900">Espace Élèves - Lycée i-baosy</h2>
                <p class="text-slate-600 text-sm">Sélectionnez votre profil ou créez votre compte élève :</p>
                
                <div class="space-y-3 text-left max-h-56 overflow-y-auto pr-1">
                    ${allProfiles.length === 0 ? '<p class="text-sm text-slate-500 italic text-center py-2">Aucun profil enregistré.</p>' : ''}
                    ${allProfiles.map(p => `
                        <div onclick="switchProfile('${p.prenom}')" class="p-3.5 bg-slate-50 hover:bg-blue-50 border ${currentProfile === p.prenom ? 'border-blue-600 bg-blue-50/80 font-bold text-blue-900 shadow-sm' : 'border-slate-200 text-slate-700'} rounded-2xl cursor-pointer flex justify-between items-center transition">
                            <div class="flex items-center space-x-3">
                                <span class="text-2xl">${p.avatar}</span>
                                <div>
                                    <p class="font-bold text-slate-900">${p.prenom} <span class="text-xs font-normal text-slate-500">(${p.age} ans)</span></p>
                                    <p class="text-xs text-blue-700 font-semibold">${p.classe}</p>
                                </div>
                            </div>
                            <span class="text-xs text-blue-700 font-mono font-bold">Activer →</span>
                        </div>
                    `).join('')}
                </div>

                <div class="pt-4 border-t border-slate-200 space-y-3 text-left">
                    <h3 class="text-sm font-bold text-slate-800">➕ Créer un nouveau profil</h3>
                    <div class="space-y-2">
                        <input id="newPrenom" placeholder="Prénom de l'élève..." class="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-600 font-medium">
                        <div class="grid grid-cols-2 gap-2">
                            <select id="newClasse" class="bg-slate-50 border border-slate-300 p-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-600">
                                ${dbMetadata.levels.map(l => `<option value="${l}">${l}</option>`).join('')}
                            </select>
                            <select id="newGenre" class="bg-slate-50 border border-slate-300 p-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-600">
                                <option value="Garçon">Garçon</option>
                                <option value="Fille">Fille</option>
                            </select>
                        </div>
                        <input id="newAge" type="number" placeholder="Âge (ex: 16)" min="5" max="25" class="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-600 font-medium">
                        <button onclick="createNewProfile()" class="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl text-sm transition shadow">Créer mon Profil</button>
                    </div>
                </div>
            </div>
        `;
    } else if (currentView === 'home') {
        const gradientClass = currentProfileObj ? getThemeGradient(currentProfileObj.genre, currentProfileObj.classe) : 'from-blue-700 via-indigo-700 to-indigo-800';
        const avatar = currentProfileObj ? currentProfileObj.avatar : '🎓';
        const totalValidated = userProgress.completedChapters.length;

        container.innerHTML = `
            <div class="space-y-6 sm:space-y-8">
                <div class="bg-gradient-to-r ${gradientClass} text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div class="space-y-3 text-center lg:text-left z-10 flex items-center space-x-4">
                        <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl border border-white/30 shadow-inner shrink-0">${avatar}</div>
                        <div>
                            <span class="inline-flex items-center space-x-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md font-mono font-semibold">
                                <span>Élève : ${currentProfile} (${currentProfileObj ? currentProfileObj.classe : ''}) - <a onclick="setView('profiles')" class="underline hover:text-blue-200 cursor-pointer">changer</a></span>
                            </span>
                            <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mt-1">Lycée i-baosy</h2>
                            <p class="text-blue-100 text-xs sm:text-sm">Chapitres validés : <b class="text-emerald-300 font-mono">${totalValidated}</b> | Sauvegarde automatique active.</p>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto z-10">
                        <button onclick="setView('levels')" class="bg-white hover:bg-blue-50 text-blue-900 font-bold px-6 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                            <span>📚 Cursus & Classes</span>
                        </button>
                        <button onclick="setView('free_practice')" class="bg-black/30 hover:bg-black/40 backdrop-blur-md text-white font-bold px-6 py-4 rounded-2xl transition border border-white/20 shadow-lg flex items-center justify-center space-x-2">
                            <span>🎯 Quiz Libres</span>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div onclick="setView('levels')" class="bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 p-6 rounded-3xl cursor-pointer transition shadow-sm hover:shadow-md group hover:-translate-y-1">
                        <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-2xl mb-4 group-hover:scale-110 transition-transform">📖</div>
                        <h3 class="text-lg font-bold text-slate-900 mb-1">Salles de Cours</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">Parcours guidé officiel de la 12ème à la Terminale.</p>
                    </div>
                    <div onclick="setView('free_practice')" class="bg-white hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 p-6 rounded-3xl cursor-pointer transition shadow-sm hover:shadow-md group hover:-translate-y-1">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                        <h3 class="text-lg font-bold text-slate-900 mb-1">Entraînement Libre</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">Choisissez librement votre matière et niveau.</p>
                    </div>
                    <div onclick="setView('profile')" class="bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 p-6 rounded-3xl cursor-pointer transition shadow-sm hover:shadow-md group hover:-translate-y-1">
                        <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-2xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                        <h3 class="text-lg font-bold text-slate-900 mb-1">Carnet & Sauvegarde</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">Suivi des notes, bulletin officiel et export JSON.</p>
                    </div>
                </div>
            </div>
        `;
    } else if (currentView === 'free_practice') {
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('home')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Accueil</button>
                <span class="text-blue-800 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 text-xs sm:text-sm">Entraînement Libre</span>
            </div>
            <div class="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-md space-y-6">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Configuration du Quiz Libre</h2>
                <p class="text-sm text-slate-600">Sélectionnez vos critères d'entraînement :</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label class="block text-xs font-mono text-blue-700 mb-2 font-bold uppercase tracking-wider">1. Classe / Niveau :</label>
                        <select id="freeLevelSelect" class="w-full bg-slate-50 border border-slate-300 p-4 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-blue-600 transition font-medium">
                            ${dbMetadata.levels.map(l => `<option value="${l}">${l}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-mono text-indigo-700 mb-2 font-bold uppercase tracking-wider">2. Série (si Terminale) :</label>
                        <select id="freeSeriesSelect" class="w-full bg-slate-50 border border-slate-300 p-4 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-indigo-600 transition font-medium">
                            <option value="">Toutes les séries</option>
                            ${dbMetadata.baccSeries.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-mono text-emerald-700 mb-2 font-bold uppercase tracking-wider">3. Matière :</label>
                    <select id="freeSubjectSelect" class="w-full bg-slate-50 border border-slate-300 p-4 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-emerald-600 transition font-medium">
                        ${dbMetadata.subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>
                <button onclick="launchFreeQuiz()" class="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-bold text-base transition shadow-md hover:shadow-lg">Lancer la Session d'Exercices →</button>
            </div>
        `;
    } else if (currentView === 'levels') {
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('home')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Accueil</button>
                <span class="text-blue-800 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 text-xs sm:text-sm">Classes Disponibles</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-900 text-center">Sélectionnez le Niveau</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                ${dbMetadata.levels.map(l => `
                    <button onclick="selectLevel('${l}')" class="group bg-white hover:bg-blue-700 hover:text-white border border-slate-200 hover:border-blue-700 p-4 sm:p-5 rounded-2xl text-center transition font-bold shadow-sm hover:shadow-md text-slate-700 text-sm sm:text-base">${l}</button>
                `).join('')}
            </div>
        `;
    } else if (currentView === 'series') {
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('levels')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Niveaux</button>
                <span class="text-blue-800 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 text-xs sm:text-sm">Terminale BACC</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-slate-900">Séries Officielles du BACC</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                ${dbMetadata.baccSeries.map(s => `
                    <button onclick="selectSeries('${s}')" class="bg-white hover:bg-indigo-700 hover:text-white border border-slate-200 hover:border-indigo-700 p-5 rounded-2xl text-left transition font-bold shadow-sm hover:shadow-md flex items-center space-x-4 group text-slate-800">
                        <div class="p-3.5 bg-indigo-50 group-hover:bg-indigo-600 text-indigo-700 group-hover:text-white rounded-xl transition">🎓</div>
                        <span class="text-base sm:text-lg">${s}</span>
                    </button>
                `).join('')}
            </div>
        `;
    } else if (currentView === 'subjects') {
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="${selectedLevel === 'Terminale BACC' ? "setView('series')" : "setView('levels')"}" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Retour</button>
                <span class="text-blue-800 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 text-xs sm:text-sm">${selectedLevel}${selectedSeries ? ' / ' + selectedSeries : ''}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-slate-900">Matières Enseignées</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                ${dbMetadata.subjects.map(s => `
                    <button onclick="selectSubject('${s}')" class="bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl text-left transition font-bold shadow-sm hover:shadow-md flex items-center space-x-4 group text-slate-800">
                        <div class="p-3.5 bg-blue-100 text-blue-700 rounded-xl transition">📖</div>
                        <span class="text-base sm:text-lg">${s}</span>
                    </button>
                `).join('')}
            </div>
        `;
    } else if (currentView === 'chapters') {
        const chapters = dbChapters.filter(c => c.level === selectedLevel && c.subject === selectedSubject);
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('subjects')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Matières</button>
                <span class="text-indigo-800 font-bold bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 text-xs sm:text-sm">${selectedLevel}${selectedSeries ? ' (' + selectedSeries + ')' : ''} / ${selectedSubject}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-900">Programme & Chapitres</h2>
            ${chapters.length === 0 ? `
                <div class="bg-white p-8 rounded-3xl border border-slate-200 text-center text-slate-500">
                    <p class="text-base">Aucun chapitre enregistré pour cette sélection.</p>
                </div>
            ` : `
                <div class="space-y-4">
                    ${chapters.map(ch => {
                        const isCompleted = userProgress.completedChapters.includes(ch.id);
                        const bestScore = userProgress.scores[ch.id] !== undefined ? userProgress.scores[ch.id] : 'Non évalué';
                        return `
                            <div class="bg-white border border-slate-200 p-5 sm:p-6 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition">
                                <div>
                                    <div class="flex items-center space-x-3">
                                        <h3 class="text-lg font-bold text-slate-900">${ch.title}</h3>
                                        ${isCompleted ? '<span class="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full border border-emerald-300 font-bold">Validé ✅</span>' : ''}
                                    </div>
                                    <p class="text-sm text-slate-600 mt-1 line-clamp-1">${ch.summary}</p>
                                    <p class="text-xs text-blue-700 mt-2 font-mono font-semibold">Dernier score : ${bestScore}</p>
                                </div>
                                <div class="flex space-x-2 w-full sm:w-auto justify-end">
                                    <button onclick="openReader('${ch.id}')" class="flex-1 sm:flex-none bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm">Cours</button>
                                    <button onclick="openQuiz('${ch.id}')" class="flex-1 sm:flex-none bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm">Évaluation</button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `}
        `;
    } else if (currentView === 'reader') {
        const ch = dbChapters.find(c => c.id === selectedChapter);
        const exercisesHtml = ch.practicalExercises ? ch.practicalExercises.map((ex, i) => `
            <div class="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 class="font-bold text-indigo-800 text-sm mb-2">Exercice Pratique #${i+1}</h4>
                <p class="text-slate-700 text-sm mb-3 leading-relaxed">${ex.statement}</p>
                <details class="cursor-pointer">
                    <summary class="text-xs text-blue-700 font-bold hover:underline">Voir la correction détaillée</summary>
                    <p class="mt-3 text-xs sm:text-sm text-emerald-900 font-mono bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 leading-relaxed">${ex.correction}</p>
                </details>
            </div>
        `).join('') : '';

        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('chapters')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Chapitres</button>
                <div class="flex items-center space-x-2">
                    <button onclick="toggleSpeechRate()" id="rateBtn" class="bg-white hover:bg-slate-50 text-blue-700 px-3.5 py-2.5 rounded-xl text-xs font-mono border border-slate-200 font-bold transition">Vitesse : ${speechRate}x</button>
                    <button onclick="speakSummary()" class="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-sm transition"><span>🔊 Écouter</span></button>
                </div>
            </div>
            <div class="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-md space-y-6">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">${ch.title}</h2>
                <div class="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">${ch.summary}</div>
                ${exercisesHtml ? `<div><h3 class="text-lg font-bold text-slate-900 mb-2">✍️ Exercices d'Application & Corrections</h3>${exercisesHtml}</div>` : ''}
                <button onclick="openQuiz('${ch.id}')" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold text-base transition shadow-md">Lancer l'Évaluation QCM →</button>
            </div>
        `;
    } else if (currentView === 'quiz') {
        const ch = dbChapters.find(c => c.id === selectedChapter);
        const q = ch.questions[currentQuizIndex];
        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('chapters')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Quitter</button>
                <span class="text-emerald-800 font-mono text-xs sm:text-sm bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 font-bold">Question ${currentQuizIndex + 1} / ${ch.questions.length}</span>
            </div>
            <div class="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-md">
                <h3 class="text-xl sm:text-2xl font-bold mb-6 text-slate-900 leading-snug">${q.question}</h3>
                <div class="space-y-3.5 mb-6">
                    ${q.options.map((opt, idx) => `
                        <button onclick="checkAnswer(${idx})" class="w-full text-left bg-slate-50 hover:bg-blue-50/80 border border-slate-200 hover:border-blue-400 p-4 sm:p-5 rounded-2xl transition font-medium text-slate-800 shadow-sm flex items-center justify-between group">
                            <span>${opt}</span>
                            <span class="text-slate-400 group-hover:text-blue-700 font-mono text-sm font-bold">→</span>
                        </button>
                    `).join('')}
                </div>
                ${selectedAnswerIndex !== null ? `
                    <div class="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 text-sm">
                        <p class="font-bold mb-1.5 text-blue-900">💡 Explication pédagogique :</p>
                        <p class="leading-relaxed">${q.explanation}</p>
                        <button onclick="nextQuestion()" class="mt-5 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow transition">Question Suivante →</button>
                    </div>
                ` : ''}
            </div>
        `;
    } else if (currentView === 'score') {
        const ch = dbChapters.find(c => c.id === selectedChapter);
        container.innerHTML = `
            <div class="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl text-center shadow-md max-w-lg mx-auto space-y-6">
                <div class="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-4xl mx-auto border border-emerald-200">🎉</div>
                <h2 class="text-3xl font-extrabold text-slate-900">Évaluation Terminée</h2>
                <p class="text-lg text-slate-700">Note de <b>${currentProfile}</b> : <span class="font-mono font-bold text-emerald-700 text-2xl block mt-1">${userScore} / ${ch.questions.length}</span></p>
                <div class="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <button onclick="openQuiz('${ch.id}')" class="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 rounded-2xl font-bold transition shadow">Réessayer</button>
                    <button onclick="setView('chapters')" class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3.5 rounded-2xl font-bold transition border border-slate-300">Retour aux chapitres</button>
                </div>
            </div>
        `;
    } else if (currentView === 'profile') {
        const totalCompleted = userProgress.completedChapters.length;
        const scoresList = Object.entries(userProgress.scores).map(([id, score]) => `
            <li class="flex justify-between py-2.5 border-b border-slate-200 text-sm">
                <span class="text-slate-700 font-medium">${id}</span>
                <span class="font-mono text-emerald-700 font-bold">${score}</span>
            </li>
        `).join('');

        container.innerHTML = `
            <div class="mb-6 flex items-center justify-between">
                <button onclick="setView('home')" class="text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm font-semibold transition">← Accueil</button>
                <span class="text-emerald-800 font-bold bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs sm:text-sm">Bilan & Sauvegarde</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-900">Carnet de Notes : ${currentProfile}</h2>
            <div class="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-md max-w-xl mx-auto space-y-6">
                <div class="flex items-center space-x-4 border-b border-slate-200 pb-6">
                    <div class="w-16 h-16 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center text-3xl border border-blue-200 font-bold shadow-inner">${currentProfileObj ? currentProfileObj.avatar : '🎓'}</div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-900">${currentProfile} <span class="text-xs font-normal text-slate-500">(${currentProfileObj ? currentProfileObj.age : ''} ans - ${currentProfileObj ? currentProfileObj.genre : ''})</span></h3>
                        <p class="text-xs text-blue-700 font-bold mt-0.5">Classe : ${currentProfileObj ? currentProfileObj.classe : ''}</p>
                        <p class="text-xs text-slate-500 font-medium">Établissement Lycée i-baosy</p>
                        <p class="text-xs text-emerald-700 font-mono mt-1 font-bold">Chapitres validés : ${totalCompleted}</p>
                    </div>
                </div>
                <div>
                    <h4 class="text-sm font-bold text-slate-800 mb-3">Relevé des Évaluations Réussies :</h4>
                    <ul class="max-h-48 overflow-y-auto space-y-1 pr-1">${scoresList || '<p class="text-sm text-slate-500 italic">Aucune évaluation enregistrée pour le moment.</p>'}</ul>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                    <button onclick="exportProfileData()" class="bg-indigo-700 hover:bg-indigo-800 text-white py-3.5 rounded-2xl font-bold text-sm transition shadow flex items-center justify-center space-x-2"><span>📥 Exporter JSON</span></button>
                    <label class="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 py-3.5 rounded-2xl font-bold text-sm transition shadow-sm flex items-center justify-center space-x-2 cursor-pointer text-center"><span>📤 Importer JSON</span><input type="file" accept=".json" onchange="importProfileData(event)" class="hidden"></label>
                </div>
                <button onclick="window.print()" class="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-bold transition shadow flex items-center justify-center space-x-2"><span>🖨️ Imprimer le Bulletin Officiel</span></button>
            </div>
        `;
    }
}

function launchFreeQuiz() {
    const level = document.getElementById('freeLevelSelect').value;
    const series = document.getElementById('freeSeriesSelect') ? document.getElementById('freeSeriesSelect').value : null;
    const subject = document.getElementById('freeSubjectSelect').value;
    const matching = dbChapters.filter(c => c.level === level && c.subject === subject);
    if (matching.length === 0) return alert('Aucun quiz disponible pour ces critères.');
    selectedLevel = level; selectedSeries = series; selectedSubject = subject;
    openQuiz(matching[0].id);
}

function exportProfileData() {
    playSound('click');
    saveProgress();
    const data = { profile: currentProfileObj, progress: userProgress, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_edusphere_${currentProfile.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importProfileData(event) {
    playSound('click');
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.profile && data.progress) {
                currentProfileObj = data.profile;
                currentProfile = currentProfileObj.prenom;
                userProgress = data.progress;
                dbUsers.setActiveProfile(currentProfileObj);
                if (!allProfiles.some(p => p.prenom === currentProfile)) { allProfiles.push(currentProfileObj); }
                saveProgress();
                alert('Sauvegarde restaurée avec succès pour le profil : ' + currentProfile);
                render();
            } else { alert('Format de fichier de sauvegarde invalide.'); }
        } catch (err) { alert('Erreur lors de la lecture du fichier JSON.'); }
    };
    reader.readAsText(file);
}

function selectLevel(l) { 
    playSound('click'); 
    selectedLevel = l; 
    if (l === 'Terminale BACC') currentView = 'series'; 
    else { selectedSeries = null; currentView = 'subjects'; } 
    render(); 
}

function selectSeries(s) { 
    playSound('click'); 
    selectedSeries = s; 
    currentView = 'subjects'; 
    render(); 
}

function selectSubject(s) { 
    playSound('click'); 
    selectedSubject = s; 
    currentView = 'chapters'; 
    render(); 
}

function openReader(id) { 
    playSound('click'); 
    selectedChapter = id; 
    currentView = 'reader'; 
    render(); 
}

function openQuiz(id) { 
    playSound('click'); 
    selectedChapter = id; 
    currentQuizIndex = 0; 
    userScore = 0; 
    selectedAnswerIndex = null; 
    currentView = 'quiz'; 
    render(); 
}

function checkAnswer(idx) { 
    if (selectedAnswerIndex !== null) return; 
    selectedAnswerIndex = idx; 
    const ch = dbChapters.find(c => c.id === selectedChapter); 
    const q = ch.questions[currentQuizIndex]; 
    if (idx === q.correctAnswer) { 
        playSound('success'); 
        userScore++; 
    } else { 
        playSound('error'); 
    } 
    saveProgress(); 
    render(); 
}

function nextQuestion() { 
    selectedAnswerIndex = null; 
    const ch = dbChapters.find(c => c.id === selectedChapter); 
    currentQuizIndex++; 
    if (currentQuizIndex < ch.questions.length) { 
        render(); 
    } else { 
        userProgress.scores[ch.id] = userScore + ' / ' + ch.questions.length; 
        if (!userProgress.completedChapters.includes(ch.id)) { 
            userProgress.completedChapters.push(ch.id); 
        } 
        saveProgress(); 
        currentView = 'score'; 
        render(); 
    } 
}

function switchProfile(prenom) { 
    playSound('click'); 
    const found = allProfiles.find(p => p.prenom === prenom);
    if (found) {
        currentProfileObj = found;
        currentProfile = found.prenom;
        dbUsers.setActiveProfile(currentProfileObj);
        userProgress = dbUsers.getProgress(currentProfile); 
        currentView = 'home'; 
        render(); 
    }
}

function createNewProfile() { 
    const prenomInput = document.getElementById('newPrenom'); 
    const classeInput = document.getElementById('newClasse'); 
    const genreInput = document.getElementById('newGenre'); 
    const ageInput = document.getElementById('newAge'); 

    if (!prenomInput || !prenomInput.value.trim()) return alert('Veuillez entrer un prénom.');
    
    const prenom = prenomInput.value.trim();
    const classe = classeInput.value;
    const genre = genreInput.value;
    const age = ageInput.value ? parseInt(ageInput.value) : 15;
    const avatar = getUniversalAvatar(genre, age);

    const newProfile = { prenom, classe, genre, age, avatar };
    
    // Éviter les doublons exacts par prénom
    allProfiles = allProfiles.filter(p => p.prenom !== prenom);
    allProfiles.push(newProfile);
    dbUsers.saveProfiles(allProfiles);
    
    switchProfile(prenom);
}

function toggleSpeechRate() { 
    playSound('click'); 
    if (speechRate === 1.0) speechRate = 1.25; 
    else if (speechRate === 1.25) speechRate = 1.5; 
    else if (speechRate === 1.5) speechRate = 0.75; 
    else speechRate = 1.0; 
    const btn = document.getElementById('rateBtn'); 
    if (btn) btn.innerText = 'Vitesse : ' + speechRate + 'x'; 
}

function speakSummary() { 
    playSound('click'); 
    const ch = dbChapters.find(c => c.id === selectedChapter); 
    if ('speechSynthesis' in window) { 
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(ch.summary); 
        utterance.lang = 'fr-FR'; 
        utterance.rate = speechRate; 
        window.speechSynthesis.speak(utterance); 
    } 
}

window.addEventListener('beforeunload', () => {
    saveProgress();
});

window.addEventListener('DOMContentLoaded', () => { 
    render(); 
});