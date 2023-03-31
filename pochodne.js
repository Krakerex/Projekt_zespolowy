function druk(poch){
    document.getElementById("rozw").innerHTML = "$" + poch + "$";
    MathJax.typeset();
}
function f1(){
    const wyr = "math.acos(x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f2(){
    const wyr = "math.cos(3x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f3(){
    const wyr = "1 / math.cos(x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f4(){
    const wyr = "1 / math.sin(5x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}