//zmienne
var x0 = 0;
var deltax = 0;
var fun = 0;
var funR = 0;
var poch = 0;
var pochR = 0;
var wynik = 0;
var wynikR = 0;
// obsluga buttonow
function f1(){
    const f1 = `
    <h4>Wybrany wzór: $\\sqrt[n]{x}$ </h4>
    <label for="x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <label for="n">
        Podaj n 
    </label>
    <input type="number" id="n" name = "n">
    <br>
    <button onclick=pierw()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f1;
    MathJax.typeset();
}
function f2(){
    const f2 = `
    <h4>Wybrany wzór: $(x)^n$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <label for="n">
        Podaj n 
    </label>
    <input type="number" id="n" name = "n">
    <br>
    <button onclick=potega()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f2;
    MathJax.typeset();
}
function f3(){
    const f3 = `
    <h4>Wybrany wzór: $ln(x)$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=logn()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f3;
    MathJax.typeset();
}
function f4(){
    const f4 = `
    <h4>Wybrany wzór: $arctan(x)$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=atan()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f4;
    MathJax.typeset();
}
function f5(){
    const f5 = `
    <h4>Wybrany wzór: $arcsin(x)$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=asin()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f5;
    MathJax.typeset();
}
function f6(){
    const f6 = `
    <h4>Wybrany wzór: $\{e}^x$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=ex()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f6;
    MathJax.typeset();
}
function f7(){
    const f7 = `
    <h4>Wybrany wzór: $\\dfrac{1}{\\cos(x)}$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=cosul()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f7;
    MathJax.typeset();
}
function f8(){
    const f8 = `
    <h4>Wybrany wzór: $\\dfrac{1}{\\sqrt[n]{x}}$ </h4>
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <label for="n">
        Podaj n 
    </label>
    <input type="number" id="n" name = "n">
    <br>
    <button onclick=pierwul()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f8;
    MathJax.typeset();
}
// drukowanie z mathjaxem
function drukowanie(odp){
    const wzor = `<h3> Wynik </h3>` + "$f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0)\\Delta x$ <br><br>" + odp;
    document.getElementById("rozw").innerHTML = wzor;
    addToCart(wzor);
    displayCart();
    MathJax.typeset();
}
// pobieranie zmiennych i liczenie
function pierw(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;
    if(n <= 2){
        n = 2;
    }

    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));
    
    fun = Math.pow(x0, 1/n);
    funR = math.round(fun, 6);
    poch = 1 / (n * Math.pow(x0, (n-1)/n));
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);
    
    var odp = "$f(x) = \\sqrt[n]{x}$<br>"
            + "$f'(x) = \\dfrac{1}{n*x^\\frac{n-1}{n}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\sqrt[" + n + "]{" + x0 + "} = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + n + " * " + x0 + "^\\frac{" + (n - 1) + "}{" + n + "}} = " + pochR + "$<br>"
            + "$\\sqrt[" + n + "]{" + x + "} \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function potega(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;

    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));
    
    fun = Math.pow(x0, n);
    funR = math.round(fun, 6);
    poch = n * Math.pow(x0, (n - 1));
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);
    
    var odp = "$f(x) = (x)^n$<br>"
            + "$f'(x) = n*x^{n-1}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = (" + x0 + ")^{" + n + "} = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = " + n + "*(" + x0 + ")^{" + (n - 1) + "} = " + pochR + "$<br>"
            + "$(" + x + ")^{" + n + "} \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function logn(){
    var x = document.getElementById("x").value;
    
    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));

    fun = Math.log(x0);
    funR = math.round(fun, 6);
    poch = 1/x0;
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);
    
    var odp = "$f(x) = \\ln(x)$<br>"
            + "$f'(x) = \\dfrac{1}{x}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\ln(" + x0 + ") = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + x0 + "} = " + pochR + "$<br>"
            + "$\\ln(" + x + ") \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function atan(){
    var x = document.getElementById("x").value;
    
    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));

    fun = Math.atan(x0);
    funR = math.round(fun, 6);
    poch = 1 / (Math.pow(x0, 2) + 1);
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);

    var odp = "$f(x) = \\arctan(x)$<br>"
            + "$f'(x) = \\dfrac{1}{x^2+1}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\arctan(" + x0 + ") = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + x0 + "^2+1} = " + pochR + "$<br>"
            + "$\\arctan(" + x + ") \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function asin(){
    var x = document.getElementById("x").value;
    
    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));

    fun = Math.asin(x0);
    funR = math.round(fun, 6);
    poch = 1 / (Math.sqrt(1 - Math.pow(x0, 2)));
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);

    var odp = "$f(x) = \\arcsin(x)$<br>"
            + "$f'(x) = \\dfrac{1}{\\sqrt{1-x^2}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\arcsin(" + x0 + ") = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{\\sqrt{1-"+ x0 + "^2}} = " + pochR + "$<br>"
            + "$\\arcsin(" + x + ") \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function ex(){
    var x = document.getElementById("x").value;
    
    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));

    fun = Math.exp(x0);
    funR = math.round(fun, 6);
    poch = Math.exp(x0);
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);

    var odp = "$f(x) = {e}^x$<br>"
            + "$f'(x) = {e}^x$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = {e}^" + x0 + " = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = {e}^" + x0 + " = " + pochR + "$<br>"
            + "${e}^{" + x + "} \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function cosul(){
    var x = document.getElementById("x").value;
    
    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));

    fun = (1 / Math.cos(x0));
    funR = math.round(fun, 6);
    poch = (Math.sin(x0) / (Math.cos(x0) * Math.cos(x0)));
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 6);

    var odp = "$f(x) = \\dfrac{1}{\\cos(x)}$<br>"
            + "$f'(x) = \\dfrac{\\sin(x)}{\\cos^2(x)}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\dfrac{1}{\\cos(" + x0 + ")} = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{\\sin(" + x0 + ")}{\\cos^2(" + x0 + ")} = " + pochR + "$<br>"
            + "$\\dfrac{1}{\\cos(" + x + ")} \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}
function pierwul(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;
    if(n <= 2){
        n = 2;
    }
    
    var pom1 = 0;
    var pom2 = 1;
    pom1 = math.sum(n, pom2);
    var dol = 0;

    x0 = Math.round(x);
    deltax = math.subtract(math.bignumber(x), math.bignumber(x0));
    
    dol = 1 / (n * Math.pow(x0, pom1 / n));
    fun = 1 / Math.pow(x0, 1 / n);
    funR = math.round(fun, 6);
    poch = -1 / (1 / dol);
    pochR = math.round(poch, 6);
    wynik = fun + (poch * deltax);
    wynikR = math.round(wynik, 3);
    
    var odp = "$f(x) = \\dfrac{1}{\\sqrt[n]{x}}$<br>"
            + "$f'(x) = -\\dfrac{1}{n*x^\\frac{n+1}{n}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\dfrac{1}{\\sqrt[" + n + "]{" + x0 + "}} = " + funR + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = -\\dfrac{1}{" + n + "*" + x0 + "^\\frac{" + pom1 + "}{" + n + "}} = " + pochR + "$<br>"
            + "$\\dfrac{1}{\\sqrt[" + n + "]{" + x + "}} \\approx " + funR + " + " + pochR + " * (" + deltax + ") \\approx " + wynikR + "$<br>";
    drukowanie(odp);
}