document.addEventListener('DOMContentLoaded' , () => {
    let profiles = JSON.parse(localStorage.getItem('profiles-created')) || [];
    let incompleteProfile = JSON.parse(localStorage.getItem('incomplete-profile')) || [];
    const passwordInput = document.getElementById('passwordInput');
    const userNameInput = document.getElementById('userNameInput');
    const loginBtn = document.getElementById('loginBtn');


    loginBtn.addEventListener('click' , () => {
        profileLogin();
    })


    function profileLogin () {
        deletePreviousProfile();
        let user = profiles.find(profile =>
            (profile.pUserName.toLowerCase() === userNameInput.value.toLowerCase() || 
                profile.pEmail.toLowerCase() === userNameInput.value.toLowerCase() ||
                profile.pPhone === normalizePhone(userNameInput.value))&& 
                profile.pPassword === passwordInput.value
        );
        console.log(user);
        if (!user) {
            user = incompleteProfile.find(profile =>
            (profile.pUserName.toLowerCase() === userNameInput.value.toLowerCase() || 
                profile.pEmail.toLowerCase() === userNameInput.value.toLowerCase() ||
                profile.pPhone === normalizePhone(userNameInput.value))&& 
                profile.pPassword === passwordInput.value
        );
        }
            
        if (!user) {
            confirm('Invalid username or password');
            return;
        }
        if (user.pImageAdded === 'no') {
            window.location.href = 'profile pic.html';
            return;
        }
        saveProfile(user);
        window.location.href = 'main page.html';
    }


    function normalizePhone(phone) {
        let digits = phone.replace(/\D/g, '');
        return digits.slice(-10);
    }


    function deletePreviousProfile() {
        localStorage.removeItem('target-profile');
    }


    function saveProfile(e) {
        localStorage.setItem('target-profile' , JSON.stringify(e));
    }
})