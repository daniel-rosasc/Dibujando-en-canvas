var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );
var a = document.getElementById("dibujo");
var Lienzo = a.getContext("2d");
var ancho = a.width;



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  Lienzo.beginPath();
  Lienzo.strokeStyle = color;
  Lienzo.moveTo(xinicial, yinicial);
  Lienzo.lineTo(xfinal, yfinal);
  Lienzo.stroke();
  Lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var xf, yi;
  var espacio = ancho / lineas;

  while(l < lineas)
  {
    console.log();
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", 1, yi, xf, 300);
    l = l + 1;
  }


}
