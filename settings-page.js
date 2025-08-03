document.addEventListener('DOMContentLoaded' , () => {
    const dropDowns = document.querySelectorAll('i');
    const show = document.querySelectorAll('.container>div > :nth-child(2)');
    const profileSettings = document.getElementById('profileSettings');
    const securitySettings = document.getElementById('securitySettings');
    const notificationSettings = document.getElementById('notificationSettings');
    const safetySettings = document.getElementById('safetySettings');
    const legalSettings = document.getElementById('legalSettings');

    profileSettings.addEventListener('click' , () => {
        dropDowns[0].classList.toggle('clicked');
        if(show[0].classList.contains('show')){
            show[0].style.height = show[0].scrollHeight + 'px';
            requestAnimationFrame(() => {
                show[0].style.height = '0px';
                show[0].classList.remove('show');
            })
        }
        else{
            show[0].classList.add('show');
            show[0].style.height = show[0].scrollHeight + 'px';
            show[0].addEventListener('transitionend' , function handler(){
                show[0].style.height = 'auto';
                show[0].removeEventListener('transitionend', handler);
            })
        }
    })
    

    securitySettings.addEventListener('click' , () => {
        dropDowns[1].classList.toggle('clicked');
        if(show[1].classList.contains('show')){
            show[1].style.height = show[1].scrollHeight + 'px';
            requestAnimationFrame(() => {
                show[1].style.height = '0px';
                show[1].classList.remove('show');
            })
        }
        else{
            show[1].classList.add('show');
            show[1].style.height = show[0].scrollHeight + 'px';
            show[1].addEventListener('transitionend' , function handler(){
                show[1].style.height = 'auto';
                show[1].removeEventListener('transitionend', handler);
            })
        }
    })


    notificationSettings.addEventListener('click' , () => {
        dropDowns[2].classList.toggle('clicked');
        if(show[2].classList.contains('show')){
            show[2].style.height = show[2].scrollHeight + 'px';
            requestAnimationFrame(() => {
                show[2].style.height = '0px';
                show[2].classList.remove('show');
            })
        }
        else{
            show[2].classList.add('show');
            show[2].style.height = show[2].scrollHeight + 'px';
            show[2].addEventListener('transitionend' , function handler(){
                show[2].style.height = 'auto';
                show[2].removeEventListener('transitionend', handler);
            })
        }
    })


    safetySettings.addEventListener('click' , () => {
        dropDowns[3].classList.toggle('clicked');
        if(show[3].classList.contains('show')){
            show[3].style.height = show[3].scrollHeight + 'px';
            requestAnimationFrame(() => {
                show[3].style.height = '0px';
                show[3].classList.remove('show');
            })
        }
        else{
            show[3].classList.add('show');
            show[3].style.height = show[3].scrollHeight + 'px';
            show[3].addEventListener('transitionend' , function handler(){
                show[3].style.height = 'auto';
                show[3].removeEventListener('transitionend', handler);
            })
        }
    })


    legalSettings.addEventListener('click' , () => {
        dropDowns[4].classList.toggle('clicked');
        if(show[4].classList.contains('show')){
            show[4].style.height = show[4].scrollHeight + 'px';
            requestAnimationFrame(() => {
                show[4].style.height = '0px';
                show[4].classList.remove('show');
            })
        }
        else{
            show[4].classList.add('show');
            show[4].style.height = show[4].scrollHeight + 'px';
            show[4].addEventListener('transitionend' , function handler(){
                show[4].style.height = 'auto';
                show[4].removeEventListener('transitionend', handler);
            })
        }
    })
})