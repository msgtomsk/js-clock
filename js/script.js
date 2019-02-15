function setClock() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var hrHand = document.querySelector('.hour-hand');
    var minHand = document.querySelector('.min-hand');
    var secHand = document.querySelector('.sec-hand');
    console.log(sec);
    var hrRot = (hr * 30) + 90;
    var minRot = (min * 6) + 90;
    var secRot = (sec * 6) + 90;
    hrHand.style.transform = `rotate(${hrRot}deg)`;
    minHand.style.transform = `rotate(${minRot}deg)`;
    secHand.style.transform = `rotate(${secRot}deg)`;
}

setInterval(setClock, 1000);