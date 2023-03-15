// do buttonow ze wzorami
function f1(){
    const f1 = `
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
}
function f2(){
    const f2 = `
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
}
function f3(){
    const f3 = `
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=logn()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f3;
}
function f4(){
    const f4 = `
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=atan()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f4;
}
function f5(){
    const f5 = `
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=asin()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f5;
}
function f6(){
    const f6 = `
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=ex()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f6;
}
function f7(){
    const f7 = `
    <label for = "x">
        Podaj x (część ułamkową podaj po znaku "." lub ",")
    </label>
    <input type="number" id="x" name = "x">
    <br>
    <button onclick=cosul()>
        Oblicz
    </button>`;
    document.getElementById("foremki").innerHTML = f7;
}
function f8(){
    const f8 = `
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
}
// drukowanie z mathjaxem
function drukowanie(odp){
    const wzor = `<h3> Wynik </h3>` + "$f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0)\\Delta x$ <br><br>" + odp;
    document.getElementById("rozw").innerHTML = wzor;
    MathJax.typeset();
}
// pobieranie zmiennych
function pierw(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;
    if(n <= 2){
        n = 2;
    }
    dlapierw(x, n);
}
function potega(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;
    dlapoteg(x, n);
}
function logn(){
    var x = document.getElementById("x").value;
    dlaln(x);
}
function atan(){
    var x = document.getElementById("x").value;
    dlaatan(x);
}
function asin(){
    var x = document.getElementById("x").value;
    dlaasin(x);
}
function ex(){
    var x = document.getElementById("x").value;
    dlaex(x);
}
function cosul(){
    var x = document.getElementById("x").value;
    dlacoswul(x);
}
function pierwul(){
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;
    if(n <= 2){
        n = 2;
    }
    dlapierwul(x,n);
}
// liczenie
function dlapierw(x, n){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;
    
    fun = Math.pow(x0, 1/n);
    poch = 1 / (n * Math.pow(x0, (n-1)/n));
    wynik = fun + (poch * deltax);
    
    var odp = "$f(x) = \\sqrt[n]{x}$<br>"
            + "$f'(x) = \\dfrac{1}{n*x^\\frac{n-1}{n}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\sqrt[" + n + "]{" + x0 + "} = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + n + " * " + x0 + "^\\frac{" + (n - 1) + "}{" + n + "}} = " + poch + "$<br>"
            + "$\\sqrt[" + n + "]{" + x + "} \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlapoteg(x, n){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;
    
    fun = Math.pow(x0, n);
    poch = n * Math.pow(x0, (n - 1));
    wynik = fun + (poch * deltax);
    
    var odp = "$f(x) = (x)^n$<br>"
            + "$f'(x) = n*x^{n-1}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = (" + x0 + ")^{" + n + "} = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = " + n + "*(" + x0 + ")^{" + (n - 1) + "} = " + poch + "$<br>"
            + "$(" + x + ")^{" + n + "} \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlaln(x){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;

    fun = Math.log(x0);
    poch = 1/x0;
    wynik = fun + (poch * deltax);
    
    var odp = "$f(x) = \\ln(x)$<br>"
            + "$f'(x) = \\dfrac{1}{x}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\ln(" + x0 + ") = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + x0 + "} = " + poch + "$<br>"
            + "$\\ln(" + x + ") \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlaatan(x){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;

    fun = Math.atan(x0);
    poch = 1 / (Math.pow(x0, 2) + 1);
    wynik = fun + (poch * deltax);

    var odp = "$f(x) = \\arctan(x)$<br>"
            + "$f'(x) = \\dfrac{1}{x^2+1}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\arctan(" + x0 + ") = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{" + x0 + "^2+1} = " + poch + "$<br>"
            + "$\\arctan(" + x + ") \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlaasin(x){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;

    fun = Math.asin(x0);
    poch = 1 / (Math.sqrt(1 - Math.pow(x0, 2)));
    wynik = fun + (poch * deltax);

    var odp = "$f(x) = \\arcsin(x)$<br>"
            + "$f'(x) = \\dfrac{1}{\\sqrt{1-x^2}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\arcsin(" + x0 + ") = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{1}{\\sqrt{1-"+ x0 + "^2}} = " + poch + "$<br>"
            + "$\\arcsin(" + x + ") \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlaex(x){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;

    fun = Math.exp(x0);
    poch = Math.exp(x0);
    wynik = fun + (poch * deltax);

    var odp = "$f(x) = {e}^x$<br>"
            + "$f'(x) = {e}^x$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = {e}^" + x0 + " = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = {e}^" + x0 + " = " + poch + "$<br>"
            + "${e}^{" + x + "} \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlacoswul(x){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.round(x);
    deltax = x - x0;

    fun = (1 / Math.cos(x0));
    //poch = (Math.sin(x0) / Math.cos(x0));
    //poch = (Math.sin(x0) / Math.pow(Math.cos(x0), 2));
    poch = (Math.sin(x0) / (Math.cos(x0) * Math.cos(x0)));
    wynik = fun + (poch * deltax);

    var odp = "$f(x) = \\dfrac{1}{\\cos(x)}$<br>"
            + "$f'(x) = \\dfrac{\\sin(x)}{\\cos^2(x)}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\dfrac{1}{\\cos(" + x0 + ")} = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = \\dfrac{\\sin(" + x0 + ")}{\\cos^2(" + x0 + ")} = " + poch + "$<br>"
            + "$\\dfrac{1}{\\cos(" + x + ")} \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}
function dlapierwul(x, n){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    var pom1 = 0;
    var pom2 = 1;
    pom1 = math.sum(n, pom2);
    var dol = 0;

    x0 = Math.round(x);
    deltax = x - x0;
    
    dol = 1 / (n * Math.pow(x0, pom1 / n));
    fun = 1 / Math.pow(x0, 1 / n);
    poch = -1 / (1 / dol);
    wynik = fun + (poch * deltax);
    
    var odp = "$f(x) = \\dfrac{1}{\\sqrt[n]{x}}$<br>"
            + "$f'(x) = -\\dfrac{1}{n*x^\\frac{n+1}{n}}$<br>"
            + "$x_0 = " + x0 + "$<br>"
            + "$\\Delta x = " + deltax + "$ <br>"
            + "$f(x_0) = f(" + x0 + ") = \\dfrac{1}{\\sqrt[" + n + "]{" + x0 + "}} = " + fun + "$<br>"
            + "$f'(x_0) = f'(" + x0 + ") = -\\dfrac{1}{" + n + "*" + x0 + "^\\frac{" + pom1 + "}{" + n + "}} = " + poch + "$<br>"
            + "$\\dfrac{1}{\\sqrt[" + n + "]{" + x + "}} \\approx " + fun + " + " + poch + " * (" + deltax + ") \\approx " + wynik + "$<br>";
    drukowanie(odp);
}