  
  
 function ff1(){
  const f1 = `
  <h4>Wybrany wzór: $ax^2+bx+c$ </h4>
  <label for="a">
      Podaj a 
  </label>
  <input type="number" id="a" name = "a">
  <label for="b">
      Podaj b 
  </label>
  <input type="number" id="b" name = "b">

  <label for="c">
      Podaj c 
  </label>
  <input type="number" id="c" name = "c">
  <br>
  <button onclick=znajkwadratowa()>
      Znajdz Min i Max
  </button>`;
  document.getElementById("foremki").innerHTML = f1;
  MathJax.typeset();
}

function znajkwadratowa()
{
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  if(a==0)
  {
    if(b==0) {document.getElementById("rozw").innerHTML = "Funkcja to linia prosta dlatego wartość maksymalna i minimalna to: "+c ;
    document.getElementById("krok").innerHTML = "a=0 oraz b=0 dlatego max i min = c" ;}
    else {document.getElementById("rozw").innerHTML = "Funkcja to przekontna dlatego wartość maksymalna i minimalna to nieskończoność i minus nieskonczoność";
    document.getElementById("krok").innerHTML = "a=0 oraz b jest rózne od 0 dlatego max i min jest nieskończone" ;}
  }
  
  if(a>0) {
    var ekstremum = -1*(b*b-4*a*c)/(4*a);
    document.getElementById("rozw").innerHTML = "Ta funkcja kwadratowa ma miejsce maksymalne równe nieskończoność oraz minimalne równe:"+ ekstremum ;
    document.getElementById("krok").innerHTML = "Najpierw sprawdzamy czy a i b są różne od zera, sprawdzamy czy a jest większe czy mniejsze od 0, potem liczby minus delte: "+ -1*(b*b-4*a*c) + " następnie dzielimy przez 4a i otrzymujemy wynik : " + ekstremum  ;}
  

    if(a<0) {
      var ekstremum = -1*(b*b-4*a*c)/(4*a);
      document.getElementById("rozw").innerHTML = "Ta funkcja kwadratowa ma miejsce minimalne równe nieskończoność oraz maksymalne równe:"+ ekstremum ;
      document.getElementById("krok").innerHTML = "Najpierw sprawdzamy czy a i b są różne od zera,sprawdzamy czy a jest większe czy mniejsze od 0, potem liczby minus delte: "+ -1*(b*b-4*a*c) + " następnie dzielimy przez 4a i otrzymujemy wynik : " + ekstremum  ;}
    }  
