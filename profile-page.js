document.addEventListener('DOMContentLoaded' , () => {
    const address = document.getElementById('Address');
    const gender = document.getElementById('Gender');
    const phone = document.getElementById('Phone');
    const email = document.getElementById('Email');
    const nickName = document.getElementById('Nickname');
    const userName = document.getElementById('Username');
    const name = document.getElementById('Name');
    const image = document.getElementById('image');
    const dob = document.getElementById('dob');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    name.textContent = logedInProfile.pFirstName + ' ' + logedInProfile.pLastName;
    image.src = logedInProfile.pImage;
    userName.textContent = logedInProfile.pUserName;
    email.textContent = logedInProfile.pEmail;
    phone.textContent = logedInProfile.pPhone;

    if (logedInProfile.pNickName){
        nickName.textContent = logedInProfile.pNickName;
    }
    else{
        nickName.textContent = '';
    }



    if (logedInProfile.pGender){
        gender.textContent = logedInProfile.pGender;
    }
    else{
        gender.textContent = '';
    }



    if (logedInProfile.pAddress){
        address.textContent = logedInProfile.pAddress;
    }
    else{
        address.textContent = '';
    }



    if (logedInProfile.pDob){
        dob.textContent = logedInProfile.pDob;
    }
    else{
        dob.textContent = '';
    }

})