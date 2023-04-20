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
function test(){
    const test = `
        <h4>Wybrany wzór: $\\dfrac{1}{x^n}$ </h4>
        <label for="n">
            Podaj n 
        </label>
        <input type="number" id="n" name = "n" value = "1">
        <br><br>
        <button onclick=test1()>
            Pochodna
        </button>
    `;
    document.getElementById("testoweformy").innerHTML = test;
    MathJax.typeset();
}
function test1(){
    //var n = document.getElementById("n").value;
    const t = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
               + "$$ f'(x_0)=\\lim_{\\Delta x \\rightarrow 0} \\frac{\\frac{1}{x_0 + \\Delta x} - \\frac{1}{x_0}}{\\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{\\frac{x_0 - x_0 - \\Delta x}{(x_0 + \\Delta x)x_0}}{\\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{- \\Delta x}{(x_0 + \\Delta x)x_0 \\cdot \\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{-1}{(x_0 + \\Delta x)x_0} = "
               + " - \\frac{1}{x_0 ^ 2} $$";
    document.getElementById("rozw").innerHTML = t;
    MathJax.typeset();
}