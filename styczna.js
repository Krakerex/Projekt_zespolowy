function tangentLine(func, point) {
    const f = math.parse(func); // parsowanie wyrażenia funkcji
    
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    document.getElementById("rozw").innerHTML="Pochodna: "+df+"<br>";
    const fPoint = math.evaluate(func, { x: point }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: point }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * point; // obliczanie punktu przecięcia z osią Y
    const equation = `y = ${dfPoint}x + ${yIntercept}`; // równanie stycznej w postaci stringa
    return equation; // zwracanie równania stycznej
  }
  function tangentLine(funcf, funcg, point) {
    const f = math.parse(funcf); // parsowanie wyrażenia funkcji
    const g = math.parse(funcg)
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    document.getElementById("rozw").innerHTML="Pochodna: "+df+"<br>";
    const xpoint = math.evaluate(funcg, {x:point})
    const fPoint = math.evaluate(funcf, { x: xpoint }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: xpoint }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * xpoint; // obliczanie punktu przecięcia z osią Y
    const equation = `y = ${dfPoint.toFixed(3)}x + ${yIntercept.toFixed(3)}`; // równanie stycznej w postaci stringa
    return equation; // zwracanie równania stycznej
  }
  function styczna(func,point){
    var equation=tangentLine(func,point);
    document.getElementById("rozw").innerHTML+=equation;
  }
  function styczna(func,g,x){
    var equation=tangentLine(func,g,x);
    document.getElementById("rozw").innerHTML+=equation;
  }
  function calculateFunctionValue(expression, x) {
    const parsedExpression = math.parse(expression); // parsowanie wyrażenia
    const scope = { x }; // wartość zmiennej x
    const evaluatedExpression = parsedExpression.evaluate(scope); // obliczenie wartości wyrażenia dla podanej wartości x
    return evaluatedExpression; // zwrócenie wyniku
  }