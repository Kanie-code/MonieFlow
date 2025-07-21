document.addEventListener('DOMContentLoaded' , () => {
    const doneBtn = document.getElementById('doneBtn');
    const phone = document.getElementById('phone');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));
    let profiles = JSON.parse(localStorage.getItem('profiles-created'));

    if(!logedInProfile){
        window.location.href = 'login.html';
        return;
    }

    function normalizePhone(phone) {
            let digits = phone.replace(/\D/g, '');
            return digits.slice(-10);
        }


    doneBtn.addEventListener('click' , () => {
         if (!phone.checkValidity()) {
                phone.reportValidity();
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
        targetProfile.pPhone = normalizePhone(phone.value);
        localStorage.setItem('profiles-created' , JSON.stringify(profiles));
    }

    function updateLoggedInProfile () {
        logedInProfile.pPhone = normalizePhone(phone.value);
        localStorage.setItem('target-profile' , JSON.stringify(logedInProfile));
    }
})