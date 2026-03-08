function showSection(section){

alert("Sección seleccionada: " + section);

}

function updateClock(){
const now = new Date();
document.getElementById("clock").innerText =
now.toUTCString().split(" ")[4];
}

setInterval(updateClock,1000);
updateClock();