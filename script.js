//const math = require('mathjs')



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

    x0 = Math.ceil(x);
    deltax = x - x0;
    
    if(deltax == 0){
        wynik = Math.pow(x, 1/n);
        document.getElementById("rozw").innerHTML = "x: " +  x + "<br> wynik:" + wynik;
    }else{
        fun = Math.pow(x0, 1/n);
        poch = (1/n) * Math.pow(x0, (n-1/1)*-1);
        wynik = fun + poch * deltax;
    
        document.getElementById("rozw").innerHTML = "x: " +  x + "<br> x0: " + x0 + "<br> deltax: " + deltax + "<br> f(x0): " + fun + "<br> pochodna:" + poch + "<br> wynik:" + wynik;
    }

}