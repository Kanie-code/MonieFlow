document.addEventListener('DOMContentLoaded' , () => {
    const name = document.getElementById('name');
    const balance = document.getElementById('balance');
    const getCashBtn = document.getElementById('getCashBtn');
    const helpBtn = document.getElementById('helpBtn');
    const input = document.getElementById('input');
    const image = document.getElementById('image');
    const btn5000 = document.getElementById('btn5000');
    const btn50000 = document.getElementById('btn50000');
    const btn10000 = document.getElementById('btn10000');
    const btn20000 = document.getElementById('btn20000');
    const btn30000 = document.getElementById('btn30000');
    const btn40000 = document.getElementById('btn40000');
    const btn100000 = document.getElementById('btn100000');
    const btn150000 = document.getElementById('btn150000');
    const btn200000 = document.getElementById('btn200000');
    const confirmBtn = document.getElementById('confirmBtn');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    input.focus();

    image.src = logedInProfile.pImage;
    balance.textContent += logedInProfile.pBalance;
    name.textContent = logedInProfile.pFirstName + ' ' + logedInProfile.pLastName;


    btn5000.addEventListener('click' , () => {
        clickButton(5000);
    });

    btn10000.addEventListener('click' , () => {
        clickButton(10000);
    });

    btn20000.addEventListener('click' , () => {
        clickButton(20000);
    });

    btn30000.addEventListener('click' , () => {
        clickButton(30000);
    });

    btn40000.addEventListener('click' , () => {
        clickButton(40000);
    });

    btn50000.addEventListener('click' , () => {
        clickButton(50000);
    });

    btn100000.addEventListener('click' , () => {
        clickButton(100000);
    });

    btn150000.addEventListener('click' , () => {
        clickButton(150000);
    });

    btn200000.addEventListener('click' , () => {
        clickButton(200000);
    });


    function clickButton(amount){
        input.value = amount;
    }
}) 