function wypuklosc(wyrazenie){
  if (wyrazenie==null){
    wyrazenie=document.getElementById("fx").value;
  }
  
  problem='9*((x^5)^(1/3))*(e^(-2x))+2';
  zakres=document.getElementById("zakres").value;
  pochodna_pierwszego_stopnia=pochodna(wyrazenie)
  pochodna_drugiego_stopnia=drugaPochodna(wyrazenie)
  wartoscPunktu=wypukloscLicz(wyrazenie,pochodna_drugiego_stopnia,-zakres,zakres);
  punktyPrzegięcia=findInflectionPoints(pochodna_drugiego_stopnia,-zakres,zakres,0.0001)
  document.getElementById("rozw").innerHTML+="Punkty przegięcia: " +punktyPrzegięcia;
  draw(zakres,wartoscPunktu,0.1)
}
function pochodna(wyrazenie){
  return math.derivative(wyrazenie, 'x');
}
function drugaPochodna(wyrazenie){
  return math.derivative(math.derivative(wyrazenie, 'x'), 'x');
}
function wypukloscLicz(wyrazenie,pochodna_drugiego_stopnia,a,b){
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
    
  function findInflectionPoints(fSecondDerivative, a, b, dx) {
    const df2 =fSecondDerivative; // Skompiluj wyrażenie matematyczne dla drugiej pochodnej funkcji
  
    const inflectionPoints = [];
  
    for (let x = a + dx; x < b; x += dx) {
      const f1 = df2.evaluate({ x: x - dx });
      const f2 = df2.evaluate({ x: x });
      const f3 = df2.evaluate({ x: x + dx });
  
      if (f1 < 0 && f2 > 0 && f3 > 0) {
        inflectionPoints.push(x);
      } else if (f1 > 0 && f2 < 0 && f3 < 0) {
        inflectionPoints.push(x);
      }
    }
  
    return inflectionPoints;
  }
  function znajdzPrzedzialyWypuklosciIWkleslosci(punktyZwrotne) {
    const przedzialy = [];
  
    for (let i = 1; i < punktyZwrotne.length; i++) {
      const przedzial = {
        punktStartowy: punktyZwrotne[i - 1],
        punktKoncowy: punktyZwrotne[i]
      };
  
      if (i % 2 === 1) {
        przedzial.typ = "wypukły";
      } else {
        przedzial.typ = "wklęsły";
      }
  
      przedzialy.push(przedzial);
    }
  
    if (przedzialy.length === 0) {
      return "Funkcja jest monotoniczna";
    }
  
    let tekst = "Przedziały ";
  
    for (let i = 0; i < przedzialy.length; i++) {
      const przedzial = przedzialy[i];
      const tekstPrzedzialu = `${przedzial.punktStartowy} - ${przedzial.punktKoncowy} (${przedzial.typ})`;
  
      if (i === przedzialy.length - 1) {
        tekst += `i ${tekstPrzedzialu}`;
      } else if (i === przedzialy.length - 2) {
        tekst += `${tekstPrzedzialu} `;
      } else {
        tekst += `${tekstPrzedzialu}, `;
      }
    }
  
    return tekst;
  }
 