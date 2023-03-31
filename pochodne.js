function druk(poch){
    document.getElementById("rozw").innerHTML = "$ f'(x) = " + poch + "$";
    MathJax.typeset();
}
function f1(){
    const wyr = "acos(x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f2(){
    const wyr = "cos(3x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f3(){
    const wyr = "1 / cos(x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function f4(){
    const wyr = "1 / sin(5x)";
    const poch = math.derivative(wyr, 'x');
    druk(poch);
}
function formP(){
    const wzor = document.getElementById("wzor").value;
    const poch = math.derivative(wzor, 'x');
    druk(poch);
}