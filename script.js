document.addEventListener("DOMContentLoaded" , () => {
    const optionBar = document.getElementById('optionBar');
    const container1 = document.getElementById('container1');
    const sideBtns = document.getElementById('sideBtns');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const keyFeaturesBtn = document.getElementById('keyFeaturesBtn');
    const contactUsBtn = document.getElementById('contactUsBtn');
    const helpBtn = document.getElementById('helpBtn');
    const aboutUsBtn = document.getElementById('aboutUsBtn');
    const loginBtn = document.getElementById('loginBtn');
    const aboutUsArea = document.getElementById('aboutUsArea');
    const keyFeaturesArea = document.getElementById('keyFeaturesArea');
    const scrollUpBtn = document.getElementById('scrollUpBtn')


    optionBar.addEventListener('click' , () => {
        sideBtns.classList.toggle('active');
        optionBar.classList.toggle('clicked');
    })


    container1.addEventListener('click' , () => {
        sideBtns.classList.remove('active');
        optionBar.classList.remove('clicked');
    })


    keyFeaturesBtn.addEventListener('click' , () => scrollToSection(keyFeaturesArea));


    aboutUsBtn.addEventListener('click' , () => scrollToSection(aboutUsArea))


    loginBtn.addEventListener('click' , () => {
        window.location.href = 'login.html'
    })



    getStartedBtn.addEventListener('click' , () => {
        window.location.href = 'Create account.html'
    })


    function scrollToSection(area){
        area.scrollIntoView({
            behavior: "smooth"
        })
    }


    window.addEventListener('scroll' , () => {
        if (window.scrollY > 100) {
            scrollUpBtn.style.display = 'block';
        }
        else{
            scrollUpBtn.style.display = 'none';
        }
    })


    scrollUpBtn.addEventListener('click' , () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        })
    })
})