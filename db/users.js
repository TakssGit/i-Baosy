const dbUsers = {
    getProfiles: function() {
        return JSON.parse(localStorage.getItem('edusphere_profiles_list')) || ['Élève Principal'];
    },
    saveProfiles: function(profiles) {
        localStorage.setItem('edusphere_profiles_list', JSON.stringify(profiles));
    },
    getProgress: function(profileName) {
        return JSON.parse(localStorage.getItem('edusphere_progress_' + profileName)) || { scores: {}, completedChapters: [] };
    },
    saveProgress: function(profileName, progressData) {
        localStorage.setItem('edusphere_progress_' + profileName, JSON.stringify(progressData));
    }
};