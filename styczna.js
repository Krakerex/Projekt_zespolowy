
function tangentLine(funcf, funcg, point) {
    
    return equation; // zwracanie równania stycznej
  }
  function styczna1(func,point){
    const f = math.parse(func); // parsowanie wyrażenia funkcji
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    const fPoint = math.evaluate(func, { x: point }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: point }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * point; // obliczanie punktu przecięcia z osią Y
    const equation = `${dfPoint}x + ${yIntercept}`; // równanie stycznej w postaci stringa
    const equation2=equation.replace('x','*'+point).replace(yIntercept,"b");
    druk(point,equation,df,dfPoint,fPoint,equation2,yIntercept)
  }
  function styczna2(funcf,Px,Py){
    const f = math.parse(funcf); // parsowanie wyrażenia funkcji
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    document.getElementById("rozw").innerHTML="Pochodna: "+df+"<br>";
    const xpoint = math.evaluate(funcg, {x:point})
    const fPoint = math.evaluate(funcf, { x: xpoint }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: xpoint }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * xpoint; // obliczanie punktu przecięcia z osią Y
    const equation = `y = ${dfPoint.toFixed(3)}x + ${yIntercept.toFixed(3)}`; // równanie stycznej w postaci stringa
    const equation2=equation.replace('x','*'+point).replace(yIntercept,"b");
    druk(point,equation,df,dfPoint,fPoint,equation2,yIntercept)
  }
  function calculateFunctionValue(expression, x) {
    const parsedExpression = math.parse(expression); // parsowanie wyrażenia
    const scope = { x }; // wartość zmiennej x
    const evaluatedExpression = parsedExpression.evaluate(scope); // obliczenie wartości wyrażenia dla podanej wartości x
    return evaluatedExpression; // zwrócenie wyniku
  }
  function druk(point,x,pochodna,d0,f0,equation2,b){
    document.getElementById("rozw").innerHTML = "$f'(x)="+ pochodna + "$<br>";
    document.getElementById("rozw").innerHTML += "$f'(x_0)=f'("+point+")="+ d0 + "$<br>";
    document.getElementById("rozw").innerHTML += "$y="+ f0+"x+b" + "$<br>";
    document.getElementById("rozw").innerHTML += "$f(x_0)=f("+point+")="+ d0 + "$<br>";
    document.getElementById("rozw").innerHTML += "$(x_0,f(x_0))=("+point+","+f0+")$<br>";
    document.getElementById("rozw").innerHTML += "$"+f0+"="+equation2+"$<br>";
    document.getElementById("rozw").innerHTML += "$b="+b+"$<br>";
    document.getElementById("rozw").innerHTML += "$y="+ x + "$";
    MathJax.typeset();
}