function derivative(expression, variable) {
    const expr = math.parse(expression);
    const derivative = math.derivative(expr, variable);
    return derivative.toString();
  }
  
  function calculateDerivative() {
    const expression = document.getElementById('expression').value;
    const variable = "x";
    const result = derivative(expression, variable);
    const ex = math.parse(expression).toTex();
    const res = math.parse(result).toTex(); 
    const odp = "$$ f\\left(x \\right) = " + ex + "$$"
                + "$$ f' \\left(x \\right) = f' \\left(" + ex + "\\right) = " +  res + "$$";
    document.getElementById('rozw').textContent = odp;
    MathJax.typeset();
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