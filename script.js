var eta =prompt ('Quanti anni hai?');
var km =prompt('Quanti km devi percorrere?');
var ticket = km * 0.21  ;
document.getElementById('price').innerHTML='Il costo del biglietto è di euro '+''+ticket;
console.log(ticket);

if (eta>64) {
  document.getElementById('price').innerHTML='Sei over 65,hai diritto ad uno sconto: costo del biglietto è di euro '+''+ticket*0.6;


} else if (eta<18) {
  document.getElementById('price').innerHTML='Sei under 18,hai diritto ad uno sconto:il costo del biglietto è di euro '+''+ticket*0.8;

}
