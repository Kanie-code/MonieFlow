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
    const change = document.getElementById('change');
    const view = document.getElementById('view');
    const pictureActions = document.getElementById('pictureActions');
    const container = document.getElementById('container');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));


    if(!logedInProfile){
        window.location.href = 'login.html';
        return;
    }

        name.textContent = logedInProfile.pFirstName + ' ' + logedInProfile.pLastName;
        image.src = logedInProfile.pImage;
        userName.innerHTML = logedInProfile.pUserName + ' ' + '<i style="font-size: small" class="fas fa-chevron-right"></i>';
        email.innerHTML = logedInProfile.pEmail + ' ' + '<i style="font-size: small" class="fas fa-chevron-right"></i>';
        phone.innerHTML = logedInProfile.pPhone + ' ' + '<i style="font-size: small;" class="fas fa-chevron-right"></i>';

        if (logedInProfile.pNickName){
            nickName.innerHTML = logedInProfile.pNickName + ' ' + '<i style="font-size: small" class="fas fa-chevron-right"></i>';
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



        if (logedInProfile.pDob){
            dob.textContent = logedInProfile.pDob;
        }
        else{
            dob.textContent = '';
        }


        image.addEventListener('click' , (e) => {
            e.stopPropagation();
            pictureActions.classList.toggle('clicked');
        });



        container.addEventListener('click' , () => {
            if(pictureActions.classList.contains('clicked')){
                pictureActions.classList.remove('clicked');
            }
        }) 



        view.addEventListener('click' , () => {
            window.location.href = 'profile-image-preview.html'
        })

})