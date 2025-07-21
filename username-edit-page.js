document.addEventListener('DOMContentLoaded' , () => {
    const doneBtn = document.getElementById('doneBtn');
    const userName = document.getElementById('userName');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));
    let profiles = JSON.parse(localStorage.getItem('profiles-created'));

    if(!logedInProfile){
        window.location.href = 'login.html';
        return;
    }

    userName.focus();


    doneBtn.addEventListener('click' , () => {
        if (!userName.checkValidity()) {
            userName.reportValidity();
            return;
        }
        else if(logedInProfile.pUserName === userName.value){
            confirm('Choose a different username from what you currently have');
            return;
        }
        updateUserProfile();
        updateLoggedInProfile();
        window.location.replace('profile-page.html');
    })

    function updateUserProfile(){
        targetProfile = profiles.find(profile => 
            logedInProfile.pPassword === profile.pPassword && logedInProfile.pUserName ===profile.pUserName
        )
        targetProfile.pUserName = userName.value;
        localStorage.setItem('profiles-created' , JSON.stringify(profiles));
    }

    function updateLoggedInProfile () {
        logedInProfile.pUserName = userName.value;
        localStorage.setItem('target-profile' , JSON.stringify(logedInProfile));
    }
})