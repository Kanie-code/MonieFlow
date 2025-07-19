document.addEventListener('DOMContentLoaded' , () => {
    const balance = document.getElementById('balance');
    const balanceShow = document.getElementById('balanceShow');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const balanceStars = document.getElementById('balanceStars');
    const img = document.getElementById('img');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    if(!logedInProfile){
        window.location.href = 'login.html';
        return;
    }

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


        const home = document.getElementById('home');
        const myProfile = document.getElementById('myProfile');
        const logOut = document.getElementById('logOut');
        const totalBalance = document.getElementById('totalBalance');
        const TotalbalanceStars = document.getElementById('TotalbalanceStars');
        const viewTotalBalance = document.getElementById('viewTotalBalance');
        const homeArea = document.getElementById('homeArea');
        const user = document.getElementById('user');
        const userArea = document.getElementById('userArea');
        const settings = document.getElementById('settings');
        const invitation = document.getElementById('invitation');
        const slash = document.getElementById('slash');


        changeBtn(home,user);


        function changeBtn(btn1, btn2 ) {
            btn1.addEventListener('click' , () => {
                if(!btn1.classList.contains('clicked')){
                    if(btn2.classList.contains('clicked')){
                        btn2.classList.remove('clicked');
                    }
                    btn1.classList.add('clicked');
                }
                if(homeArea.classList.contains('hide')) {
                    if(!userArea.classList.contains('hide')) {
                        userArea.classList.add('hide');
                    }
                    homeArea.classList.remove('hide');
                }
            })
            btn2.addEventListener('click' , () => {
                if(!btn2.classList.contains('clicked')){
                    if(btn1.classList.contains('clicked')){
                        btn1.classList.remove('clicked');
                    }
                    btn2.classList.add('clicked');
                }
                if(!homeArea.classList.contains('hide')) {
                    if(userArea.classList.contains('hide')) {
                        userArea.classList.remove('hide');
                    }
                    homeArea.classList.add('hide');
                }
            })
        }
        
        viewTotalBalance.addEventListener('click' , () => {
            hideTotalBalance();
            slash.classList.toggle('show');
        })

        viewTotalBalance.style.cursor='pointer'

        function hideTotalBalance () {
            if (totalBalance.classList.contains('hide')) {
                totalBalance.classList.remove('hide');
                TotalbalanceStars.classList.add('hide');
            }
            else {
                TotalbalanceStars.classList.remove('hide')
                totalBalance.classList.add('hide');
            }
        }

        totalBalance.textContent += logedInProfile.pBalance;

        myProfile.addEventListener('click' , () => {
            window.location.href = 'profile-page.html';
        })

        logOut.addEventListener('click' , () => {
            localStorage.removeItem('target-profile');
            window.location.href = 'login.html';
        })
});