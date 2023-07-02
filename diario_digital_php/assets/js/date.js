

var fecha = new Date();
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diaSemana = diasSemana[fecha.getDay()];
var diaMes = fecha.getDate();
var mesActual = mesesAnio[fecha.getMonth()];

var fechaActual = diaSemana + ", " + diaMes + " " + mesActual;

document.getElementById("date").textContent = fechaActual;
