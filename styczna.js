
function tangentLine(funcf, funcg, point) {
    
    return equation; // zwracanie równania stycznej
  }
  function styczna1(func,point){
    if(func==null){
      func=document.getElementById("fx").value
      
    }
    if(point==null){
      point=document.getElementById("punkt").value
      if (point.startsWith("f(")) 
        {
          gx=wyciągnij(point);
          point=usunfx(point)
          console.log("Nowa funkcja="+point)
          point=math.evaluate(point,{x:gx});
          console.log("Nowy punkt="+point)
        }
    }
    var gx = 0;
    
    const f = math.parse(func); // parsowanie wyrażenia funkcji
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    const fPoint = math.evaluate(func, { x: point }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: point }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * point; // obliczanie punktu przecięcia z osią Y
    const equation = `${dfPoint}x + ${yIntercept}`; // równanie stycznej w postaci stringa
    const equation2=equation.replace('x','*'+point).replace(yIntercept,"b");
    druk(point,equation,df,dfPoint,fPoint,equation2,yIntercept)
  }
  
  function styczna2(funcf,funcg,point){
    const f = math.parse(funcf); // parsowanie wyrażenia funkcji
    const df = math.derivative(f, 'x').toString(); // wyznaczanie pochodnej i parsowanie do stringa
    document.getElementById("rozw").innerHTML="Pochodna: "+df+"<br>";
    const xpoint = math.evaluate(funcg, {x:point})
    const fPoint = math.evaluate(funcf, { x: xpoint }); // obliczanie wartości funkcji w punkcie
    const dfPoint = math.evaluate(df, { x: xpoint }); // obliczanie wartości pochodnej w punkcie
    const yIntercept = fPoint - dfPoint * xpoint; // obliczanie punktu przecięcia z osią Y
    const equation = `${dfPoint}x + ${yIntercept}`; // równanie stycznej w postaci stringa
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
function wyciągnij(myString){
const match = myString.match(/^f\((\d+)\)=/);
if (match) {
  // jeśli string zaczyna się od "f(", po czym następuje numer, a następnie zawiera ")="
  const gx = parseInt(match[1]);
  myString = myString.replace(/^f\(\d+\)=/, '');
  console.log("Wyciągnięto numer =", gx, "z podanego stringa. Nowy string to:", myString);
  point=myString;
  return gx;
} 

}
function usunfx(myString){
  // przykładowy string do sprawdzenia
 
 const match = myString.match(/^f\((\d+)\)=/);
 if (match) {
   // jeśli string zaczyna się od "f(", po czym następuje numer, a następnie zawiera ")="

   myString = myString.replace(/^f\(\d+\)=/, '');
   return myString;
 } 
 
 }
