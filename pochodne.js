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
    document.getElementById('solution').textContent = odp;
    MathJax.typeset();
  }
function f1(){
    const res = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
               + "$$ f'(x_0)=\\lim_{\\Delta x \\rightarrow 0} \\frac{\\frac{1}{x_0 + \\Delta x} - \\frac{1}{x_0}}{\\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{\\frac{x_0 - x_0 - \\Delta x}{(x_0 + \\Delta x)x_0}}{\\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{- \\Delta x}{(x_0 + \\Delta x)x_0 \\cdot \\Delta x} = "
               + " \\lim_{\\Delta x \\rightarrow 0} \\frac{-1}{(x_0 + \\Delta x)x_0} = "
               + " - \\frac{1}{x_0 ^ 2} $$";
    document.getElementById("solution").innerHTML = res;
    MathJax.typeset();
}
function f2(){
    const res = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
                + "$$ f'(x_0)=\\lim_{\\Delta x \\rightarrow 0}\\frac{\\left(x_0 + \\Delta x\\right)^2-x_0^2}{\\Delta x} = "
                + " \\lim_{\\Delta x\\rightarrow 0}\\frac{x_0^2+2\\cdot x_0\\cdot\\Delta x+\\Delta x^2-x_0^2}{\\Delta x} = "
                + " \\lim_{\\Delta x\\rightarrow 0}\\frac{2\\cdot x_0\\cdot\\Delta x+\\Delta x^2}{\\Delta x} = "
                + " \\lim_{\\Delta x\\rightarrow 0}2\\cdot x_0+\\Delta x = "
                + " 2\\cdot x_0 $$";
    document.getElementById("solution").innerHTML = res;
    MathJax.typeset();
}
function f3(){
    const res = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
               + "$$ f'(x_0)=\\lim_{\\Delta x\\rightarrow 0}\\frac{\\sqrt{x_0+\\Delta x}-\\sqrt{x_0}}{\\Delta x} = "
               + " \\lim_{\\Delta x\\rightarrow 0}\\frac{\\sqrt{x_0+\\Delta x}-\\sqrt{x_0}}{\\Delta x}\\cdot\\frac{\\sqrt{x_0+\\Delta x}+\\sqrt{x_0}}{\\sqrt{x_0+\\Delta x}+\\sqrt{x_0}} = "
               + " \\lim_{\\Delta x \\rightarrow 0}\\frac{x_0+\\Delta x-x_0}{\\Delta x\\cdot\\left(\\sqrt{x_0+\\Delta x}+\\sqrt{x_0}\\right)} = "
               + " \\lim_{\\Delta x\\rightarrow 0}\\frac{1}{\\sqrt{x_0+\\Delta x}+\\sqrt{x_0}} = "
               + " \\frac{1}{2\\cdot \\sqrt{x_0}} $$";
    document.getElementById("solution").innerHTML = res;
    MathJax.typeset();
}
function f4(){
    const res = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
               + "$$ f'(x_0)=\\lim_{\\Delta x\\rightarrow 0}\\frac{sin \\left(x_0+\\Delta x\\right)-sin\\left(x_0\\right)}{\\Delta x} $$ <br>"
               + "$$ \\left[ \\sin{\\alpha} - \\sin{ \\beta} = 2 \\cdot \\sin{\\frac{\\alpha - \\beta}{2}} \\cdot \\cos{\\frac{\\alpha + \\beta}{2}} \\right] $$ <br>"
               + "$$ f'(x_0) = \\lim_{\\Delta x\\rightarrow 0}\\frac{2\\cdot sin \\left(\\cfrac{x_0+\\Delta x-x_0}{2}\\right)\\cdot cos\\left(\\cfrac{x_0+\\Delta x+x_0}{2} \\right)}{\\Delta x} = "
               + " \\lim_{\\Delta x\\rightarrow 0}\\frac{2\\cdot sin \\left(\\cfrac{\\Delta x}{2}\\right)}{\\Delta x}\\cdot cos\\left(x_0+\\cfrac{\\Delta x}{2} \\right) = "
               + " \\lim_{\\Delta x\\rightarrow 0}\\frac{sin \\left(\\cfrac{\\Delta x}{2}\\right)}{\\cfrac{\\Delta x}{2}}\\cdot cos\\left(x_0+\\cfrac{\\Delta x}{2}\\right) = "
               + " 1\\cdot cos\\left(x_0\\right)=cos \\left(x_0\\right) $$";
    document.getElementById("solution").innerHTML = res;
    MathJax.typeset();
}
function f5(){
    const res = "$$f'(x)=\\lim_{\\Delta x\\rightarrow 0}\\frac{f(x + \\Delta) - f(x)}{\\Delta x}$$ <br>" 
               + "$$ f'(x_0)=\\lim_{\\Delta x\\rightarrow 0}\\frac{cos \\left(x_0+\\Delta x\\right)-cos\\left(x_0\\right)}{\\Delta x} $$ <br>"
               + "$$ \\left[ \\cos{\\alpha} - \\cos{ \\beta} = -2 \\cdot \\sin{\\frac{\\alpha - \\beta}{2}} \\cdot \\sin{\\frac{\\alpha + \\beta}{2}} \\right] $$ <br>"
               + "$$ f'(x_0) = \\lim_{\\Delta x\\rightarrow 0}\\frac{-2\\cdot sin \\left(\\cfrac{x_0+\\Delta x-x_0}{2}\\right)\\cdot sin\\left(\\cfrac{x_0+\\Delta x+x_0}{2}\\right)}{\\Delta x} = "
               + " \\lim_{\\Delta x\\rightarrow 0}\\frac{-2\\cdot sin \\left(\\cfrac{\\Delta x}{2}\\right)}{\\Delta x}\\cdot sin\\left(x_0+\\cfrac{\\Delta x}{2}\\right) = "
               + " \\lim_{\\Delta x\\rightarrow 0}-\\frac{sin \\left(\\cfrac{\\Delta x}{2}\\right)}{\\cfrac{\\Delta x}{2}}\\cdot sin\\left(x_0+\\cfrac{\\Delta x}{2}\\right) = "
               + " -1\\cdot sin \\left(x_0\\right)=-sin \\left(x_0\\right) $$";
    document.getElementById("solution").innerHTML = res;
    MathJax.typeset();
}