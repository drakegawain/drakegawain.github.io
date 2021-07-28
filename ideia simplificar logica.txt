a = 29851;
var minutos = Math.trunc(a / 60);
var horas = Math.trunc(a / 3600);
var segundos = a % 60;
if (minutos > 60) {
minutos = minutos % 60;
}
if (minutos % 60 == 0){
minutos = 0;
}
console.log(horas,minutos,segundos);