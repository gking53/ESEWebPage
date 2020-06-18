function setup(){
    setInterval(datetime, 1000);
}
function datetime(){
    document.getElementById("dat").textContent = new Date();
}

window.addEventListener('load', setup, false);