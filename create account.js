document.addEventListener('DOMContentLoaded', () => {

    let profiles = JSON.parse(localStorage.getItem('profiles-created')) || [];
    let incompleteProfile = JSON.parse(localStorage.getItem('incomplete-profile')) || [];

    // ---------- CREATE ACCOUNT PAGE ----------
    if (document.getElementById('firstName')) {
        // Elements
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let userName = document.getElementById('userName');
        let phone = document.getElementById('phone');
        let password = document.getElementById('password');
        let email = document.getElementById('email');
        let confirmPassword = document.getElementById('confirmPassword');
        const nextBtn = document.getElementById('nextBtn');

        function normalizePhone(phone) {
            let digits = phone.replace(/\D/g, '');
            return digits.slice(-10);
        }


        nextBtn.addEventListener('click', () => {
            const form = document.querySelector('.details');

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            if (password.value !== confirmPassword.value) {
                confirm('Passwords do not match.');
                return;
            }

            // Clear incomplete profile safely
            incompleteProfile.length = 0;

            let profileItems = {
                pFirstName: firstName.value,
                pLastName: lastName.value,
                pUserName: userName.value,
                pEmail: email.value,
                pPassword: password.value,
                pPhone: normalizePhone(phone.value),
                pImage: 'blank-pic.webp', // Default image
                pImageAdded: 'no',
                pBalance: (0).toFixed(2)
            };

            incompleteProfile.push(profileItems);
            localStorage.setItem('incomplete-profile', JSON.stringify(incompleteProfile));

            window.location.href = 'profile pic.html';
        });
    }

    // ---------- PROFILE PIC PAGE ----------
    if (document.getElementById('addPicBtn')) {

        // Elements
        const addPicBtn = document.getElementById('addPicBtn');
        const fileUpload = document.getElementById('fileUpload');
        const device = document.getElementById('device');
        const camera = document.getElementById('camera');
        const cameraInput = document.getElementById('cameraInput');
        const imageInput = document.getElementById('imageInput');
        const image = document.getElementById('image');
        const done = document.getElementById('done');
        const skip = document.getElementById('skip');
        const container = document.getElementById('container');

        addPicBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fileUpload.classList.toggle('clicked');
        });

        device.addEventListener('click', () => {
            fileUpload.classList.remove('clicked');
        });

        camera.addEventListener('click', () => {
            fileUpload.classList.remove('clicked');
        });

        container.addEventListener('click' , () => {
            if(fileUpload.classList.contains('clicked')){
                fileUpload.classList.remove('clicked');
            }
        }) 

        function handleImageSelect(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    image.src = event.target.result;
                }
                reader.readAsDataURL(file);
            } 
            else {
                alert("You haven't selected any picture");
            }
        }

        cameraInput.addEventListener('change', handleImageSelect);
        imageInput.addEventListener('change', handleImageSelect);

        done.addEventListener('click', () => {
            if (incompleteProfile.length > 0) {
                incompleteProfile[0].pImage = image.src;

                if (!image.src.includes("blank-pic.webp")) {
                    incompleteProfile[0].pImageAdded = 'yes';
                    profiles.push(incompleteProfile[0]);
                    localStorage.setItem('profiles-created', JSON.stringify(profiles));
                    localStorage.removeItem('incomplete-profile');
                    window.location.href = 'login.html';
                } else {
                    confirm('You have not added a picture. Please add one or click skip.');
                }
            }
            console.log(profiles)
        });

        skip.addEventListener('click', () => {
            if (incompleteProfile.length > 0) {
                incompleteProfile[0].pImageAdded = 'skipped';
                profiles.push(incompleteProfile[0]);
                localStorage.setItem('profiles-created', JSON.stringify(profiles));
                localStorage.removeItem('incomplete-profile');
                window.location.href = 'login.html';
            }
            console.log(profiles)

        });
    }

});
