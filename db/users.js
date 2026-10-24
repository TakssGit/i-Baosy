const dbUsers = {
    getProfiles: function() {
        return JSON.parse(localStorage.getItem('edusphere_profiles_list')) || [];
    },
    saveProfiles: function(profiles) {
        localStorage.setItem('edusphere_profiles_list', JSON.stringify(profiles));
    },
    getActiveProfile: function() {
        return JSON.parse(localStorage.getItem('edusphere_active_profile_obj')) || null;
    },
    setActiveProfile: function(profileObj) {
        localStorage.setItem('edusphere_active_profile_obj', JSON.stringify(profileObj));
        localStorage.setItem('edusphere_active_profile', profileObj ? profileObj.prenom : null);
    },
    getProgress: function(profileName) {
        if (!profileName) return { scores: {}, completedChapters: [] };
        return JSON.parse(localStorage.getItem('edusphere_progress_' + profileName)) || { scores: {}, completedChapters: [] };
    },
    saveProgress: function(profileName, progressData) {
        if (!profileName) return;
        localStorage.setItem('edusphere_progress_' + profileName, JSON.stringify(progressData));
    }
};