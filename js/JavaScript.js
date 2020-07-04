function validarn(e,Campo)
{
	var teclado = (document.all)? e.keyCode : e.which ;
	if(teclado == 8)return true;
	var patron = /[0-9\d.]+/;
	var patron2 = /\.{1}/;
	
	var tec = String.fromCharCode(teclado);
	if(patron2.test(tec) == true)
	{
		if(Campo == 'Sueldo')
		{
			if(document.formulario.txtSueldo.value.indexOf(".",0) > -1)
			{
				return false;
			}
		}else
		{
			if(Campo.value.indexOf(".",0) > -1)
			{
				return false;
			}
		}
	}
	return patron.test(tec);
}
function Decimales(Campo)
{
	var Valor = 0;
	Valor = parseFloat(Campo.value).toFixed(2);
	Campo.value = Valor;
	// if(Campo == 'Sueldo')
	// {
		// Valor = parseFloat(document.formulario.txtSueldo.value).toFixed(2);
		// document.formulario.txtSueldo.value = Valor;
	// }else
	// {
		// Valor = parseFloat(document.formulario.txtVenta.value).toFixed(2);
		// document.formulario.txtVenta.value = Valor;
	// }
	
}
var VentasArray = new Array();
function Agregar()
{
	var filas = document.getElementById("Tabla").rows.length;
       var x = document.getElementById("Tabla").insertRow(filas);
       var y = x.insertCell(0);
       // var z = x.insertCell(1);
       y.innerHTML = '<input type="text" class="Ventas"  size="20" onkeypress="return validarn(event,this)" onchange="Decimales(this)"  >';
       // z.innerHTML ='<button id="btn" name="btn" > Delete</button>';
}
function Calcular()
{
	var Sueldo = parseFloat(document.formulario.txtSueldo.value);
	var Valores = document.getElementsByClassName("Ventas");
	var Sumatoria = 0;
	for(let i = 0;i <= document.getElementsByClassName("Ventas").length - 1;i++)
	{
		var Cont = parseInt(i);
		var venta = document.getElementsByClassName("Ventas")[Cont].value;
		var DatoSumar =  parseFloat(venta) * .125;
		Sumatoria = Sumatoria + DatoSumar;
	}
	
	document.getElementById("lblComisiones").innerHTML = "El valor de sus comisiones es: " + Sumatoria;
	Sumatoria = Sumatoria + Sueldo;
	document.getElementById("lblSumatoria").innerHTML = "El valor Total es: " + Sumatoria;
}

