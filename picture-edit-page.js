
    document.addEventListener('DOMContentLoaded' , () => {
        const addPicBtn = document.getElementById('addPicBtn');
        const fileUpload = document.getElementById('fileUpload');
        const device = document.getElementById('device');
        const camera = document.getElementById('camera');
        const cameraInput = document.getElementById('cameraInput');
        const imageInput = document.getElementById('imageInput');
        const image = document.getElementById('image');
        const done = document.getElementById('done');
        const container = document.getElementById('container');
        let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));
        let profiles = JSON.parse(localStorage.getItem('profiles-created'));

        image.src=logedInProfile.pImage;

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

        container.addEventListener('click' , () => {
            if(fileUpload.classList.contains('clicked')){
                fileUpload.classList.remove('clicked');
            }
        }) 

        cameraInput.addEventListener('change', handleImageSelect);
        imageInput.addEventListener('change', handleImageSelect);

        done.addEventListener('click', () => {
            updateUserProfile();
            updateLoggedInProfile();
            window.location.replace('profile-page.html');
        })

        function updateUserProfile(){
            let targetProfile = profiles.find(profile => 
            logedInProfile.pPassword === profile.pPassword && logedInProfile.pUserName ===profile.pUserName
            )
            targetProfile.pImage = image.src;
            localStorage.setItem('profiles-created' , JSON.stringify(profiles));
        }

        function updateLoggedInProfile () {
            logedInProfile.pImage = image.src;
            localStorage.setItem('target-profile' , JSON.stringify(logedInProfile));
        }
    })