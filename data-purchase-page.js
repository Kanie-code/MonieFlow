document.addEventListener('DOMContentLoaded' , () => {
    const name = document.getElementById('name');
    const balance = document.getElementById('balance');
    const dataBtn = document.getElementById('dataBtn');
    const image = document.getElementById('image');
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
    const airtelOthers = document.getElementById('airtelOthers');
    const airtelRounter = document.getElementById('airtelRounter');
    const airtelNight = document.getElementById('airtelNight');
    const airtelSocial = document.getElementById('airtelSocial');
    const airtelMonthPlus = document.getElementById('airtelMonthPlus');
    const airtelMonthly = document.getElementById('airtelMonthly');
    const airtelWeekly = document.getElementById('airtelWeekly');
    const airtelDaily = document.getElementById('airtelDaily');
    const airtelOffer = document.getElementById('airtelOffers');
    const airtelOthersPlan = document.getElementById('airtelOthersPlan');
    const airtelRouterPlan = document.getElementById('airtelRouterPlan');
    const airtelSocialPlan = document.getElementById('airtelSocialPlan');
    const airtelMonthPlusPlan = document.getElementById('airtelMonthPlusPlan');
    const airtelMonthlyPlan = document.getElementById('airtelMonthlyPlan');
    const airtelWeeklyPlan = document.getElementById('airtelWeeklyPlan');
    const airtelNightPlan = document.getElementById('airtelNightPlan');
    const airtelDailyPlan = document.getElementById('airtelDailyPlan');
    const airtelOffersPlan = document.getElementById('airtelOffersPlan');
    const gloOthers = document.getElementById('gloOthers');
    const gloSpecial = document.getElementById('gloSpecial');
    const gloCampus = document.getElementById('gloCampus');
    const gloHourly = document.getElementById('gloHourly');
    const gloWeekend = document.getElementById('gloWeekend');
    const gloNight = document.getElementById('gloNight');
    const gloSocial = document.getElementById('gloSocial');
    const gloAlwaysOn = document.getElementById('gloAlwaysOn');
    const gloMega = document.getElementById('gloMega');
    const gloMonthly = document.getElementById('gloMonthly');
    const gloWeekly = document.getElementById('gloWeekly');
    const gloDaily = document.getElementById('gloDaily');
    const gloOffers = document.getElementById('gloOffers');
    const gloDataPlans = document.getElementById('gloDataPlans');
    const gloAlwaysOnPlan = document.getElementById('gloAlwaysOnPlan');
    const gloHourlyPlan = document.getElementById('gloHourlyPlan');
    const gloWeekendPlan = document.getElementById('gloWeekendPlan');
    const gloCampusPlan = document.getElementById('gloCampusPlan');
    const gloSpecialPlan = document.getElementById('gloSpecialPlan');
    const gloSocialPlan = document.getElementById('gloSocialPlan');
    const gloMegaPlan = document.getElementById('gloMegaPlan');
    const gloMonthlyPlan = document.getElementById('gloMonthlyPlan');
    const gloWeeklyPlan = document.getElementById('gloWeeklyPlan');
    const gloNightPlan = document.getElementById('gloNightPlan');
    const gloDailyPlan = document.getElementById('gloDailyPlan');
    const gloOffersPlan = document.getElementById('gloOffersPlan');
    const mtnBroadband = document.getElementById('mtnBroadband');
    const mtnXtraValue = document.getElementById('mtnXtraValue');
    const mtnMonthly = document.getElementById('mtnMonthly');
    const mtnWeekly = document.getElementById('mtnWeekly');
    const mtnDaily = document.getElementById('mtnDaily');
    const mtnOffers = document.getElementById('mtnOffers');
    const mtnDataPlans = document.getElementById('mtnDataPlans');
    const mtnBroadbandPlan = document.getElementById('mtnBroadbandPlan');
    const mtnXtraValuePlan = document.getElementById('mtnXtraValuePlan');
    const mtnMonthlyPlan = document.getElementById('mtnMonthlyPlan');
    const mtnWeeklyPlan = document.getElementById('mtnWeeklyPlan');
    const mtnDailyPlan = document.getElementById('mtnDailyPlan');
    const mtnOffersPlan = document.getElementById('mtnOffersPlan');
    const mobile9MonthlyPlan = document.getElementById('mobile9MonthlyPlan');
    const mobile9DailyPlan = document.getElementById('mobile9DailyPlan');
    const mobile9OffersPlan = document.getElementById('mobile9OffersPlan');
    const mobile9Monthly = document.getElementById('mobile9Monthly');
    const mobile9Daily = document.getElementById('mobile9Daily');
    const mobile9Offers = document.getElementById('mobile9Offers');
    const mobile9DataPlans = document.getElementById('mobile9DataPlans');
    const airtelDataPlans = document.getElementById('airtelDataPlans');

    let logedInProfile = JSON.parse(localStorage.getItem('target-profile'));

    phoneInput.value = ('0' + logedInProfile.pPhone).replace(/^(\d{4})(\d{3})(\d{0,})$/, '$1 $2 $3').trim()


    autoSwitchNetwork();

    renderDataPlans();


    contact.addEventListener('click' , () => {
        pickContact();
    })

    function renderDataPlans() {
        if (selectedNetworkImage.src.includes('mtn-logo.jpg')){
            if(!mtnDataPlans.classList.contains('clicked')){
                mtnDataPlans.classList.add('clicked');
            }
            airtelDataPlans.classList.remove('clicked');
            gloDataPlans.classList.remove('clicked');
            mobile9DataPlans.classList.remove('clicked');
            return;
        }

        if(selectedNetworkImage.src.includes('airtel-logo.png')) {
            mtnDataPlans.classList.remove('clicked');
            if(!airtelDataPlans.classList.contains('clicked')){
                airtelDataPlans.classList.add('clicked');
            }
            gloDataPlans.classList.remove('clicked');
            mobile9DataPlans.classList.remove('clicked');
            return;
        }

        if(selectedNetworkImage.src.includes('glo-logo.jpg')) {
            mtnDataPlans.classList.remove('clicked');
            airtelDataPlans.classList.remove('clicked');
            if(!gloDataPlans.classList.contains('clicked')) {
                gloDataPlans.classList.add('clicked');
            }
            mobile9DataPlans.classList.remove('clicked');
            return;
        }

        if(selectedNetworkImage.src.includes('9mobile-logo.jpg')) {
            mtnDataPlans.classList.remove('clicked');
            airtelDataPlans.classList.remove('clicked');
            gloDataPlans.classList.remove('clicked');
            if(!mobile9DataPlans.classList.contains('clicked')) {
                mobile9DataPlans.classList.add('clicked');
            }
            return;
        }
    }

    airtelOthers.addEventListener('click' , () => renderAirtelDataPlans(
            airtelOthersPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelRouterPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelOthers,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
        )
    );

    airtelRounter.addEventListener('click' , () => renderAirtelDataPlans(
            airtelRouterPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelRounter,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelOthers
        )
    );

    airtelNight.addEventListener('click' ,  () => renderAirtelDataPlans(
            airtelNightPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelRouterPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelNight,
            airtelOffer,
            airtelDaily,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );

    airtelSocial.addEventListener('click' , () => renderAirtelDataPlans(
            airtelSocialPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelRouterPlan,
            airtelWeeklyPlan,
            airtelSocial,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelRounter,
            airtelOthers
        )
    );

    airtelMonthPlus.addEventListener('click' , () => renderAirtelDataPlans(
            airtelMonthPlusPlan,
            airtelRouterPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelMonthPlus,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );

    airtelMonthly.addEventListener('click' , () => renderAirtelDataPlans(
            airtelMonthlyPlan,
            airtelMonthPlusPlan,
            airtelRouterPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelMonthly,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );

    airtelWeekly.addEventListener('click' , () => renderAirtelDataPlans(
            airtelWeeklyPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelRouterPlan,
            airtelWeekly,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );

    airtelDaily.addEventListener('click' , () => renderAirtelDataPlans(
            airtelDailyPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelRouterPlan,
            airtelNightPlan,
            airtelOffersPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelDaily,
            airtelOffer,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );

    airtelOffer.addEventListener('click' , () => renderAirtelDataPlans(
            airtelOffersPlan,
            airtelMonthPlusPlan,
            airtelMonthlyPlan,
            airtelDailyPlan,
            airtelNightPlan,
            airtelRouterPlan,
            airtelOthersPlan,
            airtelSocialPlan,
            airtelWeeklyPlan,
            airtelOffer,
            airtelDaily,
            airtelNight,
            airtelWeekly,
            airtelMonthly,
            airtelMonthPlus,
            airtelSocial,
            airtelRounter,
            airtelOthers
        )
    );


    function renderAirtelDataPlans(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
        if(!a.classList.contains('clicked')){
            a.classList.add('clicked')
        }
        b.classList.remove('clicked');
        c.classList.remove('clicked');
        d.classList.remove('clicked');
        e.classList.remove('clicked');
        f.classList.remove('clicked');
        g.classList.remove('clicked');
        h.classList.remove('clicked');
        i.classList.remove('clicked');
        if(!j.classList.contains('clicked')){
            j.classList.add('clicked')
        }
        k.classList.remove('clicked');
        l.classList.remove('clicked');
        m.classList.remove('clicked');
        n.classList.remove('clicked');
        o.classList.remove('clicked');
        p.classList.remove('clicked');
        q.classList.remove('clicked');
        r.classList.remove('clicked');
    }


    function renderGloDataPlans(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){
        if(!a.classList.contains('clicked')){
            a.classList.add('clicked')
        }
        b.classList.remove('clicked');
        c.classList.remove('clicked');
        d.classList.remove('clicked');
        e.classList.remove('clicked');
        f.classList.remove('clicked');
        g.classList.remove('clicked');
        h.classList.remove('clicked');
        i.classList.remove('clicked');
        j.classList.remove('clicked');
        k.classList.remove('clicked');
        l.classList.remove('clicked');
        if(!m.classList.contains('clicked')){
            m.classList.add('clicked')
        }
        n.classList.remove('clicked');
        o.classList.remove('clicked');
        p.classList.remove('clicked');
        q.classList.remove('clicked');
        r.classList.remove('clicked');
        s.classList.remove('clicked');
        t.classList.remove('clicked');
        u.classList.remove('clicked');
        v.classList.remove('clicked');
        w.classList.remove('clicked');
        x.classList.remove('clicked');
    }

    gloSpecial.addEventListener('click' , () => renderGloDataPlans(
            gloSpecialPlan,
            gloCampusPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloSpecial,
            gloCampus,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloCampus.addEventListener('click' , () => renderGloDataPlans(
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloHourly.addEventListener('click' ,  () => renderGloDataPlans(
            gloHourlyPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloHourly,
            gloCampus,
            gloSpecial,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloWeekend.addEventListener('click' , () => renderGloDataPlans(
            gloWeekendPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloWeekend,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloNight.addEventListener('click' , () => renderGloDataPlans(
            gloNightPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloNight,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloSocial.addEventListener('click' , () => renderGloDataPlans(
            gloSocialPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloSocial,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloAlwaysOn,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloAlwaysOn.addEventListener('click' , () => renderGloDataPlans(
            gloAlwaysOnPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloAlwaysOn,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloMega,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloMega.addEventListener('click' , () => renderGloDataPlans(
            gloMegaPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMonthlyPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloMega,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMonthly,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloMonthly.addEventListener('click' , () => renderGloDataPlans(
            gloMonthlyPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloMonthly,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloWeekly,
            gloDaily,
            gloOffers
        )
    );

    gloWeekly.addEventListener('click' , () => renderGloDataPlans(
            gloWeeklyPlan,
            gloMonthlyPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffersPlan,
            gloWeekly,
            gloMonthly,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloDaily,
            gloOffers
        )
    );

    gloDaily.addEventListener('click' , () => renderGloDataPlans(
            gloDailyPlan,
            gloMonthlyPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloNightPlan,
            gloOffersPlan,
            gloDaily,
            gloMonthly,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloWeekly,
            gloOffers
        )
    );


    gloOffers.addEventListener('click' , () => renderGloDataPlans(
            gloOffersPlan,
            gloMonthlyPlan,
            gloCampusPlan,
            gloSpecialPlan,
            gloAlwaysOnPlan,
            gloHourlyPlan,
            gloWeeklyPlan,
            gloWeekendPlan,
            gloSocialPlan,
            gloMegaPlan,
            gloNightPlan,
            gloDailyPlan,
            gloOffers,
            gloMonthly,
            gloCampus,
            gloSpecial,
            gloHourly,
            gloWeekend,
            gloNight,
            gloSocial,
            gloAlwaysOn,
            gloMega,
            gloWeekly,
            gloDaily,
        )
    );

    function renderMtnDataPlans(a,b,c,d,e,f,g,h,i,j,k,l){
        if(!a.classList.contains('clicked')){
            a.classList.add('clicked')
        }
        b.classList.remove('clicked');
        c.classList.remove('clicked');
        d.classList.remove('clicked');
        e.classList.remove('clicked');
        f.classList.remove('clicked');
        if(!g.classList.contains('clicked')){
            g.classList.add('clicked')
        }
        h.classList.remove('clicked');
        i.classList.remove('clicked');
        j.classList.remove('clicked');
        k.classList.remove('clicked');
        l.classList.remove('clicked');
    }

    mtnBroadband.addEventListener('click' , () => renderMtnDataPlans(
            mtnBroadbandPlan,
            mtnXtraValuePlan,
            mtnMonthlyPlan,
            mtnWeeklyPlan,
            mtnDailyPlan,
            mtnOffersPlan,
            mtnBroadband,
            mtnXtraValue,
            mtnMonthly,
            mtnWeekly,
            mtnDaily,
            mtnOffers,
        )
    );

    mtnXtraValue.addEventListener('click' , () => renderMtnDataPlans(
            mtnXtraValuePlan,
            mtnBroadbandPlan,
            mtnMonthlyPlan,
            mtnWeeklyPlan,
            mtnDailyPlan,
            mtnOffersPlan,
            mtnXtraValue,
            mtnBroadband,
            mtnMonthly,
            mtnWeekly,
            mtnDaily,
            mtnOffers
        )
    );

    mtnMonthly.addEventListener('click' , () => renderMtnDataPlans(
            mtnMonthlyPlan,
            mtnBroadbandPlan,
            mtnXtraValuePlan,
            mtnWeeklyPlan,
            mtnDailyPlan,
            mtnOffersPlan,
            mtnMonthly,
            mtnBroadband,
            mtnXtraValue,
            mtnWeekly,
            mtnDaily,
            mtnOffers
        )
    );

    mtnWeekly.addEventListener('click' , () => renderMtnDataPlans(
            mtnWeeklyPlan,
            mtnBroadbandPlan,
            mtnXtraValuePlan,
            mtnMonthlyPlan,
            mtnDailyPlan,
            mtnOffersPlan,
            mtnWeekly,
            mtnBroadband,
            mtnXtraValue,
            mtnMonthly,
            mtnDaily,
            mtnOffers
        )
    );

    mtnDaily.addEventListener('click' , () => renderMtnDataPlans(
            mtnDailyPlan,
            mtnBroadbandPlan,
            mtnXtraValuePlan,
            mtnMonthlyPlan,
            mtnWeeklyPlan,
            mtnOffersPlan,
            mtnDaily,
            mtnBroadband,
            mtnXtraValue,
            mtnMonthly,
            mtnWeekly,
            mtnOffers
        )
    );

    mtnOffers.addEventListener('click' , () => renderMtnDataPlans(
            mtnOffersPlan,
            mtnBroadbandPlan,
            mtnXtraValuePlan,
            mtnMonthlyPlan,
            mtnWeeklyPlan,
            mtnDailyPlan,
            mtnOffers,
            mtnBroadband,
            mtnXtraValue,
            mtnMonthly,
            mtnWeekly,
            mtnDaily
        )
    );

    function renderMobile9DataPlans(a,b,c,d,e,f){
        if(!a.classList.contains('clicked')){
            a.classList.add('clicked')
        }
        b.classList.remove('clicked');
        c.classList.remove('clicked');
        if(!d.classList.contains('clicked')){
            d.classList.add('clicked')
        }
        e.classList.remove('clicked');
        f.classList.remove('clicked');
    }

    mobile9Offers.addEventListener('click' , () => renderMobile9DataPlans(
            mobile9OffersPlan,
            mobile9DailyPlan,
            mobile9MonthlyPlan,
            mobile9Offers,
            mobile9Daily,
            mobile9Monthly
        )
    );

    mobile9Daily.addEventListener('click' , () => renderMobile9DataPlans(
            mobile9DailyPlan,
            mobile9OffersPlan,
            mobile9MonthlyPlan,
            mobile9Daily,
            mobile9Offers,
            mobile9Monthly
        )
    );

    mobile9Monthly.addEventListener('click' , () => renderMobile9DataPlans(
            mobile9MonthlyPlan,
            mobile9OffersPlan,
            mobile9DailyPlan,
            mobile9Monthly,
            mobile9Offers,
            mobile9Daily
        )
    );

    const elements = document.querySelectorAll('.data-plan-row > div :nth-child(3)');

    elements.forEach(el => {
        const text = el.textContent.trim();
  
        const match = text.match(/^(\d+(?:(?:\.\d+)| )?)([a-zA-Z]+)$/);

        if (match) {
            const [, amount, unit] = match;

            el.innerHTML = `
            <span class="data-amount">${amount}</span><span class="data-unit">${unit}</span>`;
        }
    });


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

    mtn.addEventListener('click' , function clickMtn(){
        if(!inputMTN.checked){
            inputMTN.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'mtn-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
        renderDataPlans();
    });

    glo.addEventListener('click' , function clickGlo() {
        if(!inputGlo.checked){
            inputGlo.click();
        }
        uncheck(inputMTN);
        uncheck(inputAirtel);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'glo-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
        renderDataPlans();

    });

    airtel.addEventListener('click' , function clickAirtel() {
        if(!inputAirtel.checked){
            inputAirtel.click();
        }
        uncheck(inputMTN);
        uncheck(inputGlo);
        uncheck(input9Mobile);
        selectedNetworkImage.src = 'airtel-logo.png';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
        renderDataPlans();
    });

    mobile9.addEventListener('click' , function clickMobile9() {
        if(!input9Mobile.checked){
            input9Mobile.click();
        }
        uncheck(inputAirtel);
        uncheck(inputGlo);
        uncheck(inputMTN);
        selectedNetworkImage.src = '9mobile-logo.jpg';
        networks.classList.remove('click');
        networksDown.classList.remove('clicked');
        renderDataPlans();
    });
        

    function uncheck(button) {
        if(button.checked){
            button.click();
        }
    }

    image.src = logedInProfile.pImage;
    balance.textContent += logedInProfile.pBalance;
    name.textContent = logedInProfile.pFirstName + ' ' + logedInProfile.pLastName;

});