document.addEventListener('DOMContentLoaded' , () => {
    const balance = document.getElementById('balance');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const img = document.getElementById('img');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    img.src = logedInProfile.pImage;
    welcomeMessage.textContent += ` ${logedInProfile.pFirstName},`
    balance.textContent += logedInProfile.pBalance;

});