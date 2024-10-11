const slide = document.getElementById("slide");

let index = 0

function mudaImg1() {
    index = (index + 1) % 4
    slide.style.transform = `translateX(${-index * 550}px)`
}

function mudaImg2() {
    index = (index - 1 + 4) % 4
    slide.style.transform = `translateX(${-index * 550}px)`
}

setInterval(mudaImg1, 4000)


const normal = document.getElementById("normal")
const vip = document.getElementById("vip")
const premium = document.getElementById("premium")

const promoNormal = document.getElementById("promoNormal")
const promoVip = document.getElementById("promoVip")
const promoPremium = document.getElementById("promoPremium")

const ticketNormal = document.getElementById("ticketPromoNormal")
const ticketVip = document.getElementById("ticketPromoVip")
const ticketPremium = document.getElementById("ticketPromoPremium")

let normalState = false
let vipState = false
let premiumState = false

normal.addEventListener("click", () => {
    if (!normalState) {
        promoNormal.style.maxHeight = '1000px';
        promoNormal.style.padding = '30px 30px 50px 30px';
        normalState = true;
    } else {
        promoNormal.style.padding = '0';
        promoNormal.style.maxHeight = '200px';
        normalState = false;
    }
});
vip.addEventListener("click",()=>{
    if (!vipState) {
        promoVip.style.maxHeight = '1000px'
        promoVip.style.padding = '30px 30px 50px 30px'
        vipState = true
    }
    else{
        promoVip.style.padding = '0';
        promoVip.style.maxHeight = '200px';
        vipState = false;
    }
});
premium.addEventListener("click",()=>{
    if (!premiumState) {
        promoPremium.style.maxHeight = '1000px'
        promoPremium.style.padding = '30px 30px 50px 30px'
        premiumState = true
    }
    else {
        promoPremium.style.padding = '0';
        promoPremium.style.maxHeight = '200px';
        premiumState = false;
        
    }
});
