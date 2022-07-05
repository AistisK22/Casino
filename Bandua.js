var img = document.getElementById('shit');
var im = document.getElementById('ps');

img.addEventListener('click', suktis, false);
function suktis() {
    var deg = 500 + Math.round(Math.random() * 500);

    var css = '-webkit-transform: rotate(' + deg + 'deg);';

    im.setAttribute(
        'style', css
    );
}

function verifikacija(){
	var mailas = document.getElementById("usrname").value;
	var passwd = document.getElementById("psw").value;
	if (mailas == "admin@gmail.com"  && passwd == "adminas"){
		document.getElementById("forma").action = "admin.html";
	}
	else 
		location.replace("Pagrindinis_registruotam.html");
}

function laikas() {
		const d = new Date();
		document.getElementById("time").innerHTML = "Dabartinis laikas: <br>" + d.getHours() + ":" + d.getMinutes() +
	":" + d.getSeconds();
	setTimeout(laikas, 1000);
}




function pildyti(){
    var suma = parseFloat(document.getElementById("suma").value);
    var esama = parseFloat(document.getElementById("pildymas").innerText.slice(14));
    var pilna = (suma + esama).toFixed(2);
	if (!(isNaN(pilna)))
	{
    document.getElementById("pildymas").innerHTML = "JŪSŲ BALANSAS: <br>" + pilna + "€";
	}
	else document.getElementById("pildymas").innerHTML = "JŪSŲ BALANSAS: <br>" + esama + "€";
	
}

function balanso(){
    var balansas =  document.getElementById("balansas");
    document.getElementById("slotas").src ="win.png";
	var number = parseInt((Math.random()*100));
    balansas.innerText = "Balansas: " + number.toString() + "€";
    document.getElementById("top").innerHTML = "<font face=\"Roboto\"><b><i>TOP Laimėtojas: USER5482 175.45€</b></i>"

}

function bankas(){
	document.getElementById("paypal").style.border = "4px solid #0047b3";
	document.getElementById("paypal").style.opacity = "0.8";
}

function bankas1(){
	document.getElementById("visa").style.border = "4px solid #0047b3";
	document.getElementById("visa").style.opacity = "0.8";
}

function password(){
	if (document.getElementById("psw").value == document.getElementById("repeated").value){
		return true;
	}
	else 	{alert("Slaptažodžiai neatitinka vienas kito");
 return false;
	}
}

function autentifikavimas(){
	document.getElementById("aut").src = "palm.gif";
	setTimeout(() => {
  location.replace("Bandau.html");
}, "4000")
		document.getElementById("autentifikuoja").innerText = "AUTENTIFIKUOJAMA...";

}

function randominis(){
const array = ["Ruletė", "Monetos Metimas", "Fortūnos Ratas", "Sprogimas", "Lošimo automatas"];
    const random = Math.floor(Math.random() * array.length);
    switch (array[random]){
        case 'Ruletė': location.assign("Rulete_registruotam.html"); break;
        case 'Monetos Metimas': location.assign("Moneta_registruotam.html");break;
        case 'Fortūnos Ratas': location.assign("Ratas_registruotam.html");break;
        case 'Sprogimas': location.assign("Sprogimas_registruotam.html");break;
        case 'Lošimo automatas': location.assign("Slot_registruotam.html");break;
    }
}

function metimas(){
	document.getElementById("moneta").src = "download.gif";
}

function sukimas(){
		document.getElementById("ratas").src = "ratas.gif";

}