function f1(){
    // const expression = document.getElementById('expression').value;
    // console.log(expression);
    // let scope = "-x";
    // const eva = math.evaluate(expression, scope);
    // console.log(eva);
    // const mx = "-x";
    // const test = funkcja.evaluate({x:mx});
    // const t = math.parse(test);
    // document.getElementById('rozw').textContent = funkcja;
    // MathJax.typeset();
}
function t1(){
    const odp = "Funkcja jest parzysta, gdy spełnia równanie: $f\\left(x\\right)=f\\left(-x\\right)$<br>"
              + "Funkcja jest nieparzysta, gdy spełnia równanie: $f\\left(x\\right)=-f\\left(-x\\right)$ <br><br><br>"
              + "$f\\left(x\\right) = x^2-1$ <br>"
              + "$f\\left(-x\\right) = \\left(-x\\right)^2-1=x^2-1=f\\left(x\\right)$ <br><br>"
              + "Funkcja $f\\left(x\\right) = x^2-1$ jest parzysta";
    document.getElementById('solution').innerHTML = odp;
    MathJax.typeset();
}