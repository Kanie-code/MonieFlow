document.addEventListener('DOMContentLoaded' , () => {
    const doneBtn = document.getElementById('doneBtn');
    const email = document.getElementById('email');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));
    let profiles = JSON.parse(localStorage.getItem('profiles-created'));

    if(!logedInProfile){
        window.location.href = 'login.html';
        return;
    }


    doneBtn.addEventListener('click' , () => {
            if (!email.checkValidity()) {
                email.reportValidity();
                return;
            }
        updateUserProfile();
        updateLoggedInProfile();
        window.location.replace('profile-page.html');
    })

    function updateUserProfile(){
        let targetProfile = profiles.find(profile => 
            logedInProfile.pPassword === profile.pPassword && logedInProfile.pUserName ===profile.pUserName
        )
        targetProfile.pEmail = email.value;
        localStorage.setItem('profiles-created' , JSON.stringify(profiles));
    }

    function updateLoggedInProfile () {
        logedInProfile.pEmail = email.value;
        localStorage.setItem('target-profile' , JSON.stringify(logedInProfile));
    }
})