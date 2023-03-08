function root()
{
    var n = parseFloat(document.Pierw.n.value);
    var x = parseFloat(document.Pierw.x.value);
    if(n == 0 || n == 1){
        n = 2;
    }
    dlapierw(x, n);
}

function przyklad1(){

    var n = 4;
    var x = 80.7;
    dlapierw(x, n);
}

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
    
    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad2(){
    var n = 3;
    var x = 0.977;
    dlapoteg(x, n);
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
    poch = n * Math.pow(x0, n-1);
    wynik = fun + (poch * deltax);
    
    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad3() {
    var x = 1.0007;
    dlaln(x);
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
    
    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad4(){
    var x = 0.007;
    dlaatan(x);
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

    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad5(){
    var x = -0.05;
    dlaasin(x);
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

    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad6(){
    var x = 0.03;
    dlacoswul(x);
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

    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}
function przyklad7(){
    var n = 4;
    var x = 15.996;
    dlapierwul(x, n);
}
function dlapierwul(x, n){
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;
    var dol = 0;
    x0 = Math.round(x);
    deltax = x - x0;
    
    dol = 1 / (n * Math.pow(x0, (n+1)/n));
    fun = 1 / Math.pow(x0, 1/n);
    poch = -1 / (1 / dol);
    wynik = fun + (poch * deltax);
    
    document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna: " + poch + "<br> wynik: " + wynik;
}