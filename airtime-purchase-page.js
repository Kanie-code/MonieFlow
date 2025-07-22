document.addEventListener('DOMContentLoaded' , () => {
    const name = document.getElementById('name');
    const balance = document.getElementById('balance');
    const dataBtn = document.getElementById('dataBtn');
    const input = document.getElementById('input');
    const image = document.getElementById('image');
    const btn50 = document.getElementById('btn50');
    const btn100 = document.getElementById('btn100');
    const btn200 = document.getElementById('btn200');
    const btn500 = document.getElementById('btn500');
    const btn1000 = document.getElementById('btn1000');
    const btn2000 = document.getElementById('btn2000');
    const btn3000 = document.getElementById('btn3000');
    const btn4000 = document.getElementById('btn4000');
    const btn5000 = document.getElementById('btn5000');
    const confirmBtn = document.getElementById('confirmBtn');
    const historyBtn = document.getElementById('historyBtn');
    const networksDown = document.getElementById('networksDown');
    const selectedNetworkImage = document.getElementById('selectedNetworkImage');
    const inputMTN = document.getElementById('inputMTN');
    const inputGlo = document.getElementById('inputGlo');
    const inputAirtel = document.getElementById('inputAirtel');
    const input9Mobile = document.getElementById('input9Mobile');
    const mtn = document.getElementById('mtn');
    const airtel = document.getElementById('airtel');
    const glo = document.getElementById('glo');
    const mobile9 = document.getElementById('mobile9');
    const networks = document.getElementById('networks');
    const phoneInput = document.getElementById('phoneInput');
    const contact = document.getElementById('contact');
    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));


    input.focus();

    contact.addEventListener('click' , () => {
        pickContact();
    })

    async function pickContact() {
    if ('contacts' in navigator && 'ContactsManager' in window) {
        const props = ['name', 'tel'];
        const opts = { multiple: false };

        const contacts = await navigator.contacts.select(props, opts);

        if (contacts.length > 0) {
            const selectedContact = contacts[0];
            const phoneNumber = selectedContact.tel[0];

            console.log("Phone number selected:", phoneNumber);

            document.querySelector('#phoneInput').value = phoneNumber;
        }
        } else {
            alert("Your browser does not support contact picking.");
        }
    }

    phoneInput.addEventListener('input' , () => {
        if(phoneInput.value === ''){
            return;
        };
        if(phoneInput.value[0] !== '0'){
            phoneInput.value = '0' + phoneInput.value.slice(0);
        };
        let rawValue = phoneInput.value.replace(/\D/g, ''); 

        let oldPos = phoneInput.selectionStart;

        // Save whether user was typing at the end
        let wasAtEnd = (oldPos === phoneInput.value.length);

        // Format number: (split into parts with spaces)
        let formatted = rawValue
            .replace(/^(\d{4})(\d{3})(\d{0,})$/, '$1 $2 $3')
            .trim();

        phoneInput.value = formatted;

        // Now handle caret:
        if (wasAtEnd) {
            // User was typing at the end, keep it at the end
            phoneInput.selectionStart = phoneInput.selectionEnd = formatted.length;
        } else {
            // User was editing in the middle, adjust caret

            // Calculate how many spaces were added before old position
            let spacesBefore = (phoneInput.value.slice(0, oldPos).match(/ /g) || []).length;
            let rawSpacesBefore = (rawValue.slice(0, oldPos).match(/ /g) || []).length;

            let diff = spacesBefore - rawSpacesBefore;

            let newPos = oldPos + diff;

            phoneInput.selectionStart = phoneInput.selectionEnd = newPos;
        };
        if(phoneInput.value.length > 13){
            phoneInput.value = phoneInput.value.slice(0,13);
        }
    })

    networksDown.addEventListener('click' , () => {
        networks.classList.toggle('click');
        networksDown.classList.toggle('clicked');
    });

    mtn.addEventListener('click' , () => {
        if(!inputMTN.checked){
            inputMTN.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'mtn-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    });

    glo.addEventListener('click' , () => {
        if(!inputGlo.checked){
            inputGlo.click();
        }
        uncheck(inputMTN);
        uncheck(inputAirtel);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'glo-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    });

    airtel.addEventListener('click' , () => {
        if(!inputAirtel.checked){
            inputAirtel.click();
        }
        uncheck(inputMTN);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'airtel-logo.png';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    });

    mobile9.addEventListener('click' , () => {
        if(!input9Mobile.checked){
            input9Mobile.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(inputMTN);
        selectedNetworkImage.src = '9mobile-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    });

    function uncheck(button) {
        if(button.checked){
            button.click();
        }
    }

    image.src = logedInProfile.pImage;
    balance.textContent += logedInProfile.pBalance;
    name.textContent = logedInProfile.pFirstName + ' ' + logedInProfile.pLastName;


    btn50.addEventListener('click' , () => {
        clickButton(50);
    });

    btn100.addEventListener('click' , () => {
        clickButton(100);
    });

    btn200.addEventListener('click' , () => {
        clickButton(200);
    });

    btn500.addEventListener('click' , () => {
        clickButton(500);
    });

    btn1000.addEventListener('click' , () => {
        clickButton(1000);
    });

    btn2000.addEventListener('click' , () => {
        clickButton(2000);
    });

    btn3000.addEventListener('click' , () => {
        clickButton(3000);
    });

    btn4000.addEventListener('click' , () => {
        clickButton(4000);
    });

    btn5000.addEventListener('click' , () => {
        clickButton(5000);
    });


    function clickButton(amount){
        input.value = amount;
    }
}) 