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

    phoneInput.value = ('0' + logedInProfile.pPhone).replace(/^(\d{4})(\d{3})(\d{0,})$/, '$1 $2 $3').trim()

    autoSwitchNetwork();

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

            phoneInput.value = phoneNumber;
        }
        } else {
            alert("Your browser does not support contact picking.");
        }
    }

    phoneInput.addEventListener('input' , () => {
        if(phoneInput.value.length === 14 && phoneInput.value.startsWith('+234')){
            phoneInput.value = phoneInput.value.slice(4)
        }
        if(phoneInput.value === ''){
            return;
        };
        if(phoneInput.value[0] !== '0'){
            phoneInput.value = '0' + phoneInput.value.slice(0);
        };
        let rawValue = phoneInput.value.replace(/\D/g, ''); 

        let oldPos = phoneInput.selectionStart;

        let wasAtEnd = (oldPos === phoneInput.value.length);

        let formatted = rawValue
            .replace(/^(\d{4})(\d{3})(\d{0,})$/, '$1 $2 $3')
            .trim();

        phoneInput.value = formatted;


        if (wasAtEnd) {

            phoneInput.selectionStart = phoneInput.selectionEnd = formatted.length;
        } else {
    
            let spacesBefore = (phoneInput.value.slice(0, oldPos).match(/ /g) || []).length;
            let rawSpacesBefore = (rawValue.slice(0, oldPos).match(/ /g) || []).length;

            let diff = spacesBefore - rawSpacesBefore;

            let newPos = oldPos + diff;

            phoneInput.selectionStart = phoneInput.selectionEnd = newPos;
        };
        if(phoneInput.value.length > 13){
            phoneInput.value = phoneInput.value.slice(0,13);
        }
        if(phoneInput.value.length === 13){
            autoSwitchNetwork();
        }
    })

    function getNetwork() {
            let clean = phoneInput.value.replace(/\D/g, '');

            if (clean.startsWith('234')) {
                clean = '0' + clean.slice(3);
            }

            let prefix = clean.slice(0, 4);

            const mtn = ['0803','0806','0703','0706','0813','0816','0810','0814','0903','0906','0913','0916'];
            const airtel = ['0802','0808','0708','0701','0812','0902','0907','0901','0912'];
            const glo = ['0805','0807','0705','0815','0811','0905','0915'];
            const nineMobile = ['0809','0817','0818','0909','0908'];

            if (mtn.includes(prefix)) return 'MTN';
            if (airtel.includes(prefix)) return 'Airtel';
            if (glo.includes(prefix)) return 'Glo';
            if (nineMobile.includes(prefix)) return '9Mobile';

            return 'Unknown Network';
    }

    networksDown.addEventListener('click' , () => {
        networks.classList.toggle('click');
        networksDown.classList.toggle('clicked');
    });

    function autoSwitchNetwork () {
        if( getNetwork() === 'MTN'){
        if(!inputMTN.checked){
            inputMTN.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'mtn-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    };

    if( getNetwork() === 'Airtel'){
        if(!inputAirtel.checked){
            inputAirtel.click();
        }
        uncheck(inputMTN);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'airtel-logo.png';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    }

    if( getNetwork() === 'Glo'){
        if(!inputGlo.checked){
            inputGlo.click();
        }
        uncheck(inputMTN);
        uncheck(inputAirtel);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'glo-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    }

    if( getNetwork() === '9mobile'){
        if(!input9Mobile.checked){
            input9Mobile.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(inputMTN);
        selectedNetworkImage.src = '9mobile-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
    }

    if( getNetwork() === 'Unknown Network'){
        confirm('select your network provider');
    }

    }

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