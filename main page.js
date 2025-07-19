document.addEventListener('DOMContentLoaded' , () => {
    const balance = document.getElementById('balance');
    const balanceShow = document.getElementById('balanceShow');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const balanceStars = document.getElementById('balanceStars');
    const img = document.getElementById('img');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    img.src = logedInProfile.pImage;
    welcomeMessage.textContent += ` ${logedInProfile.pFirstName},`
    balance.textContent += logedInProfile.pBalance;

    balanceShow.addEventListener('click', () => hideBalance());


    img.addEventListener('click' , () => {
        window.location.href = 'profile-page.html'
    });


    img.style.cursor = 'pointer'


    balanceShow.style.cursor = 'pointer'



    function hideBalance () {
        if (balance.classList.contains('hide')) {
            balance.classList.remove('hide');
            balanceStars.classList.add('hide');
        }
        else {
            balanceStars.classList.remove('hide')
            balance.classList.add('hide');
        }
    }

});