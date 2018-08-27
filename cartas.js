//-------------------clases objeto

function Carta(valor, palo) {
    //creo las propiedades
    this.valor = valor;
    this.palo = palo;
};
//-------------------------------------
//------------------funcion objeto------
Carta.prototype.nombre = function() {
    return  palos[parseInt(this.palo) - 1] + " " +vlr[parseInt(this.valor) - 1] ;
};

Carta.prototype.ruta = function() {
    return "cartas\\"+palos[parseInt(this.palo) - 1] + "\\" +this.valor+ ".jpg" ;
};
//------------------------------------------
//----------------array global
var vlr = ["uno", "dos", "tres", "cuatro", "cinco", "sies", "siete", "ocho","nueve","sota", "caballo", "rey"];
var palos = ["basto", "copa", "espada", "oro"];
var mazo = [];
//-------------------------------------
//---------------------creacion de mazo---------------
function generar_baraja() {
mazo.splice(0,mazo.length)
  for (var i = 1; i <= 4; i++) {
    for (var o = 1; o <= 12; o++) {
      var x = new Carta(o, i);
      mazo.push(x)
    };
  };
};
//....................mostrar imagene.....
function mostrar_img() {
    var contenedor = document.getElementById("baraja");
  for (var i = 0; i < mazo.length; i++) {
    var nueva_caja = document.createElement("div");
    nueva_caja.className = "caja";
    var new_img = document.createElement("img");
    new_img.src = mazo[i].ruta();
    nueva_caja.appendChild(new_img);
    contenedor.appendChild(nueva_caja);
  };
}
//-------------------mostrar nombres der baraja sin fotos--------
  function mostrar_baraja() {
      var contenedor = document.getElementById("baraja");
    for (var i = 0; i < mazo.length; i++) {
      var nueva_caja = document.createElement("div");
      nueva_caja.className = "caja";
      nueva_caja.innerHTML = mazo[i].nombre();
      contenedor.appendChild(nueva_caja);
    };
  }
//...........numero entro aleatorio entre dos
  function entero_aleatorio(min,max) {
 // Valor entre min y max, ambos incluidos.
 var valorEntero = Math.floor(Math.random()*(max-min+1)+min);
 return valorEntero;
  }
//..............numero aleatorio del array
function carta_azar(x) {
  return entero_aleatorio(0,x.length-1);
}
//.............enserio joder , cojer un objeto del array y quiutarlo
function cojer_carta() {
  var selec=carta_azar(mazo);
      var valorar = mazo[selec];
       mazo.splice(selec, 1);
  return valorar;
}
//................jugar (id del jugador)
function jugar(jugador) {
  var contenedor = document.getElementById(jugador);
  var nueva_caja = document.createElement("div");
  nueva_caja.className = "caja";
  var new_img = document.createElement("img");
  new_img.src = cojer_carta().ruta();
  nueva_caja.appendChild(new_img);
  contenedor.appendChild(nueva_caja);

}
//...............se genera la primera baraja.

generar_baraja();
