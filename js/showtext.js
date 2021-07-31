
window.onload = function (){ 
	 var infobox = document.getElementById('infobox');
document.getElementById('infobox').addEventListener('mouseover', () => {aparecerTexto()}, true);
document.getElementById('infobox').addEventListener('mouseout', () => {reset()}, true);

function aparecerTexto() {
  document.getElementById("infobox1").style.display = "block"
  document.getElementById('infobox2').style.display = "block"
 }
function reset() {
  document.getElementById("infobox1").style.display = "none";
  document.getElementById("infobox2").style.display = "none";
}
  }