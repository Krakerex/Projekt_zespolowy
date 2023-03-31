function inverseFunction(f, y) {
  // Zdefiniuj funkcję pochodną
  const df = x => (f(x + 0.0001) - f(x)) / 0.0001;

  // Metoda Newtona-Raphsona: znajdź argument, dla którego funkcja zwraca y
  let x = 0; // przyjmij wartość początkową argumentu
  const epsilon = 0.00001; // tolerancja błędu
  let fx = f(x);
  let dfx = df(x);

  while (Math.abs(fx - y) > epsilon) {
    x = x - (fx - y) / dfx; // wyznacz kolejną wartość argumentu
    fx = f(x); // oblicz wartość funkcji dla nowego argumentu
    dfx = df(x); // oblicz wartość pochodnej dla nowego argumentu
  }

  return x;
}


//function obliczWartoscFunkcji(funkcja, x) {
//  return funkcja(x);
//}

function ff1(){
  const f1 = `
  <h2>Wybrany wzór: $(x)^2$ </h2>
  <label for="y">
      Podaj y: 
  </label>
  <input type="number" id="y" name = "y">
  <br>
  <button onclick=obliczf1()>
      Oblicz
  </button>`;
  document.getElementById("foremki").innerHTML = f1;
  MathJax.typeset(); // dla 4 zwroci 2
}
function obliczf1(){
  const y = document.getElementById("y").value;
  const argument = inverseFunction(fkw, y);
  document.getElementById("rozw").innerHTML ="Wynik:  " + argument ;
}

function ff2(){
  const f2 = ` 
  <h2>Wybrany wzór: $sin(x)-0.5$ </h2>
  <label for="y">
      Podaj y: 
  </label>
  <input type="number" id="y" name = "y">
  <br>
  <button onclick=obliczf1()>
      Oblicz
  </button>`;
  document.getElementById("foremki").innerHTML = f2;
  MathJax.typeset();
}
function obliczf2(){
  const y = document.getElementById("y").value;
  const argument = inverseFunction(fsin, y);
  document.getElementById("rozw").innerHTML ="Wynik:  " + argument ;
  // dla 0.2 zwróci około 0.5236 (czyli około 30 stopni w radianach)
}

function ff3(){
  const f3 = ` 
  <h2>Wybrany wzór: $(e)^x - 5$ </h2>
  <label for="y">
      Podaj y: 
  </label>
  <input type="number" id="y" name = "y">
  <br>
  <button onclick=obliczf3()>
      Oblicz
  </button>`;
  document.getElementById("foremki").innerHTML = f3;
  MathJax.typeset();
  // wynik: 1.6094379124341 dla 0
}
function obliczf3(){
  const y = document.getElementById("y").value;
  const argument = inverseFunction(fexp, y);
  document.getElementById("rozw").innerHTML ="Wynik:  " + argument ;
}

function ff4(){
  const f4 = `
  <h2>Wybrany wzór: $\\dfrac{(x)^3-1}{\(x)-1}-2$ </h2>
  <label for="y">
      Podaj y: 
  </label>
  <input type="number" id="y" name = "y">
  <br>
  <button onclick=obliczf4()>
      Oblicz
  </button>`;
  document.getElementById("foremki").innerHTML = f4;
  MathJax.typeset();
   // zwróci około 1.3247 dla y= -4
}
function obliczf4(){
  const y = document.getElementById("y").value;
  const argument = inverseFunction(fwiel, y);
  document.getElementById("rozw").innerHTML ="Wynik:  " + argument ;
}

function fexp(x) {
  return Math.exp(x) - 5;
}

function fwiel(x) {
  return (Math.pow(x, 3) - 1) / (x - 1) - 2;
}


function fsin(x) {
  return Math.sin(x) - 0.5;
}

function fkw(x) {
  return x * x;
}

/*function oblicz() {
  const funkcjaTekst = document.getElementById("fx_fo").value;
  const liczba = Number(document.getElementById("liczba").value);
  const funkcja = new Function("x", `return ${funkcjaTekst}`);

  const wynikFunkcji = obliczWartoscFunkcji(funkcja, liczba);
  const wynikOdwrotny = obliczFunkcjeOdwrotna(funkcja, liczba);

  document.getElementById(
    "rozw"
  ).value = `Dla funkcji ${funkcjaTekst}, liczby ${liczba}:\nF(${liczba}) = ${wynikFunkcji.toFixed(
    5
  )}\nF^(-1)(${liczba}) = ${wynikOdwrotny.toFixed(5)}`;

 
  
  const y = 4;
  const argument = inverseFunction(f, y);
  document.getElementById("rozw").innerHTML = "Y wynosi: " + y +"Wynik:  " + argument ;
}*/