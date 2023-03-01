const math = require('mathjs')

function root(x,y)
{

}
function rootR(x,y){
    y1=1/y;
fx=y1*x^(1-y1);
x0=Math.round(x);
deltax=x0-x;
fx0=root()
}

function przyklad1(){

    var n = 4;
    var x = 80.7;
    var x0 = 0;
    var deltax = 0;
    var fun = 0;
    var poch = 0;
    var wynik = 0;

    x0 = Math.ceil(x);
    deltax = x - x0;
    
    fun = Math.pow(x0, 1/n);
    poch = (1/n) * Math.pow(x0, (n-1/1)*-1);
    wynik = fun + poch * deltax;
    
    document.getElementById("rozw").innerHTML = "x" +  x + " x0" + x0 + " deltax" + deltax + " fun" + fun + " pochodna:" + poch + " wynik:" + wynik;
}