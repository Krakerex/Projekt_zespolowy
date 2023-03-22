function wypukloscLicz(wyrazenie,a,b){
    document.getElementById("rozw").innerHTML='';
    const wartoscPunktu=[];
    const wartoscY=[];
    const pochodna=math.derivative(wyrazenie, 'x');
    const drugaPochodna=math.derivative(pochodna, 'x');
    document.getElementById("rozw").innerHTML+=
    "$f'(x)= "+pochodna+"$<br>"+"$f''(x)= "+drugaPochodna+"$<br>";
    MathJax.typeset();
    for(i=a;i<=b;i+=0.1){
        x=math.derivative(wyrazenie, 'x');
        x=math.derivative(x, 'x').evaluate({x: i});
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
function wypuklosc(){
    wyrazenie=document.getElementById("fx").value;
    problem='9*((x^5)^(1/3))*(e^(-2x))+2';
    zakres=document.getElementById("zakres").value;
    wartoscPunktu=wypukloscLicz(wyrazenie,-zakres,zakres);
    draw(zakres,wartoscPunktu)
}
function draw(zakres,y){
    const xValues = math.range(-zakres, zakres, 0.1).toArray()
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
