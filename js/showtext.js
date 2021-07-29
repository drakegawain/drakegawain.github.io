
window.onload = function (){ 
	 var infobox = document.getElementById('infobox');
document.getElementById('infobox').addEventListener('mouseover', () => {aparecerTexto()}, true);
document.getElementById('infobox').addEventListener('mouseout', () => {reset()}, true);

function aparecerTexto() {
  document.getElementById("infobox1").innerHTML = "The history of time measurement back's to 30.000 b.c. The first solutions to measure time used natural events, like the movement of sun and other stars in sky. The pioneers to measure time using sundial clock were the egyptian, around the year 3.500b.c, and as the story of humanity and technology moves foward, the ways to measure time advances to increase its precision."
  document.getElementById('infobox2').innerHTML = "The first mechanical clock was invented by Yi Xing, a chinese budist monk in 725a.c, but was after Galileu Galilei discover the rules of pendular movement that the time measurement and the mechanichal clocks were revolutionized. Today, the international definition of time is based on a atomic clock, witch is considered as the most accurate clock in the world, althought a new clock, from NIST (USA), reinvidicates the title."
 }
function reset() {
  document.getElementById("infobox1").innerHTML = "";
  document.getElementById("infobox2").innerHTML = "";
}
  }