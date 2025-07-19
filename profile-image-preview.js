document.addEventListener('DOMContentLoaded' , () => {
    const image = document.getElementById('image');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    image.src = logedInProfile.pImage;
})