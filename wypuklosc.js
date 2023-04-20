function wypuklosc(){
  wyrazenie=document.getElementById("fx").value;
  problem='9*((x^5)^(1/3))*(e^(-2x))+2';
  zakres=document.getElementById("zakres").value;
  pochodna_pierwszego_stopnia=pochodna(wyrazenie)
  pochodna_drugiego_stopnia=drugaPochodna(wyrazenie)
  wartoscPunktu=wypukloscLicz(wyrazenie,pochodna_pierwszego_stopnia,pochodna_drugiego_stopnia,-zakres,zakres);
 let x1 = 0, x2 = 1, E = 0.0001;
  secant(x1, x2, E);
  draw(zakres,wartoscPunktu,0.1)
}
function pochodna(wyrazenie){
  return math.derivative(wyrazenie, 'x');
}
function drugaPochodna(wyrazenie){
  return math.derivative(math.derivative(wyrazenie, 'x'), 'x');
}
function wypukloscLicz(wyrazenie,pochodna_pierwszego_stopnia,pochodna_drugiego_stopnia,a,b){
    document.getElementById("rozw").innerHTML='';
    const wartoscPunktu=[];
    const wartoscY=[];
    document.getElementById("rozw").innerHTML+=
    "$f''(x)= "+pochodna_drugiego_stopnia+"$<br>";
    MathJax.typeset();
    for(i=a;i<=b;i+=0.1){
        x=math.derivative(wyrazenie, 'x');
        x=pochodna_drugiego_stopnia.evaluate({x: i});
        var punkt =[i,x];
        wartoscY.push(x);
        wartoscPunktu.push(punkt);
    }

    // wartoscPunktu.forEach((punkt, index) => {
    //     document.getElementById("rozw").innerHTML += "x: "+   punkt[0] +" = "+punkt[1]+ "<br>"; 
    // });
    const punktZmiany=[];
    var sign;
    if(wartoscPunktu[0][1]<=0){
         sign=-1
    }
    else{
         sign=1  
    }
    poprzedniPunkt=null
    wartoscPunktu.forEach(punkt => {
        if(punkt[1]<0 && sign==-1){
            
        }
        else if(punkt[1]==0 && sign==-1){
            punktZmiany.push(poprzedniPunkt);
            punktZmiany.push(punkt);
            sign=1;
        }
        else if(punkt[1]<0 && sign==1){
            punktZmiany.push(poprzedniPunkt);
            punktZmiany.push(punkt);
            sign=-1
        }else if(punkt[1]>0 && sign==-1){
            punktZmiany.push(poprzedniPunkt);
            punktZmiany.push(punkt);
            sign=1
        }
        else if(punkt[1]>0 && sign==1){
           
        }
        poprzedniPunkt=punkt;
        
})
document.getElementById("rozw").innerHTML+="Punkty przegięcia (w trakcie)"+"<br>"
punktZmiany.forEach(punkt => {
    document.getElementById("rozw").innerHTML += "x1: "+  math.round(punkt[0],3)  +" = "+math.round(punkt[1],3) + "<br>"; 
});
return wartoscY;
}

function draw(zakres,y,krok){
    const xValues = math.range(-zakres, zakres, krok).toArray()
      const yValues = y

      // render the plot using plotly
      const trace1 = {
        
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      var layout = {
        title: {
            text:'Wykres drugiej pochodnej',
            font: {
              family: 'Courier New, monospace',
              size: 24
            },
            xref: 'paper',
            x: 0.05,
          },
        autosize: false,
        width: 500,
        height: 500,
        margin: {
          l: 50,
          r: 50,
          b: 100,
          t: 100,
          pad: 4
        }
    }
      const data = [trace1]
      Plotly.newPlot('wykres', data,layout)

    }
    function secant(wyrazenie,x1, x2, E){

 
    // An example function whose solution is determined using
    // Bisection Method. The function is x^3 - x^2  + 2
    function f(x)
    {
      let f = Math.pow(x, 3) + x - 1;
      return f;
    }
    // Prints root of func(x) with error of EPSILON
    let n = 0, xm, x0, c;
    if (f(x1) * f(x2) < 0) {
        do {
            // calculate the intermediate value
            x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
 
            // check if x0 is root of equation or not
            c = f(x1) * f(x0);
 
            // update the value of interval
            x1 = x2;
            x2 = x0;
 
            // update number of iteration
            n++;
 
            // if x0 is the root of equation then break the loop
            if (c == 0)
                break;
            xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
        } while (Math.abs(xm - x0) >= E); // repeat the loop
                                // until the convergence
     
            
        } else
    
        document.getElementById("rozw").innerHTML+="Root of the given equation=" + x0 + "<br>";
    
  }

