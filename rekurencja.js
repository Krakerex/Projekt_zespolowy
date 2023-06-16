
//PRZYKŁAD 1 
function przyklad1_rozw(){
    document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{(n+1)!}{\\pi^{2n}}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{(1)!}{\\pi^{0}} = 1$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{(2)!}{\\pi^{2}}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{(3)!}{\\pi^{4}}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_{n-1} = \\frac{(n+1-1)!}{\\pi^{2(n-1)}} = \\frac{n!}{\\pi^{2n-2}}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_n = \\frac{(n+1)!}{\\pi^{2n}} = \\frac{(n+1)n!}{\\pi^{2n-2}\\cdot\\pi^2}$` ;
    document.getElementById("solution").innerHTML += ` $\ = a_{n-1} \\cdot \\frac{n+1}{\\pi^2}$<br><br>` ;

    MathJax.typeset();

  }
//PRZYKŁAD 1 WŁASNY  
  function przyklad1_wlasny_rozw(){
    const x = parseFloat(document.wpisz1.x.value);
    const y = parseFloat(document.wpisz1.y.value);
  
    document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{(n+`+x+`)!}{\\pi^{`+y+`n}}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{`+(x+0)+`!}{\\pi^{`+(y*0)+`}} = 1$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{`+(x+1)+`!}{\\pi^{`+(y*1)+`}}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{`+(x+2)+`!}{\\pi^{`+(y*2)+`}}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_{n-1} = \\frac{(n+`+(x)+`-1)!}{\\pi^{`+(y)+`(n-1)}} = \\frac{(n+`+(x-1)+`)!}{\\pi^{`+(y)+`n-`+(y)+`}}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_n = \\frac{(n+`+x+`)!}{\\pi^{`+y+`n}} = \\frac{(n+`+x+`)(n+`+(x-1)+`)!}{\\pi^{`+y+`n-`+y+`}\\cdot\\pi^`+y+`}$` ;
    document.getElementById("solution").innerHTML += ` $\ = a_{n-1} \\cdot \\frac{n+`+x+`}{\\pi^`+y+`}$<br><br>` ;

    MathJax.typeset();
  }
//PRZYKŁAD 2
  function przyklad2_rozw(){
    document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{2^n}{(4n+3)!}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{2^0}{(4\\cdot0 + 3)!}= \\frac{1}{6}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{2^1}{(4\\cdot1 + 3)!}= \\frac{1}{2520}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{2^2}{(4\\cdot2 + 3)!}= \\frac{1}{9979200}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{2^{n+1}}{(4(n+1)+3)!} = \\frac{2^{n+1}}{(4n+7)!} $` ;
    document.getElementById("solution").innerHTML += ` $\ = \\frac{2^n}{(4n+3)!} \\cdot \\frac{2}{(4n+7)(4n+6)(4n+5)(4n+4)}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = a_n \\cdot \\frac{2}{(4n+7)(4n+6)(4n+5)(4n+4)}$ <br><br>` ;
    MathJax.typeset();

  }
  //PRZYKŁĄD 2 WŁASNY
  function przyklad2_wlasny_rozw(){
    const px = parseFloat(document.wpisz2.x.value);
    const py = parseFloat(document.wpisz2.y.value);
    const pz = parseFloat(document.wpisz2.z.value);

    let x = parseFloat(document.wpisz2.x.value);
    let y = parseFloat(document.wpisz2.y.value);
    let z = parseFloat(document.wpisz2.z.value);

    let dot = `\\cdot`
    let zplus = `+`

if(y===1){
  y=""
  dot = ''
}

if(z===0){
  z=""
  zplus = ""
}

     zplusy=pz+py

    var slimak = ``;

    for(var i=(zplusy); i>z; i--){

          slimak += `(`+y+`n+`+i+`)`
          if(i>(z+1)){
            slimak += `\\cdot`
        }

      }
    
      

      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n`+zplus+``+z+`)!}$ <br><br>` ;
      document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{`+x+`^0}{(`+y+``+dot+`0 `+zplus+` `+z+`)!}= \\frac{1}{`+factorial(py*0+pz)+`}$ <br><br>` ;
      document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{`+x+`^1}{(`+y+``+dot+`1 `+zplus+` `+z+`)!}= \\frac{`+x*x+`}{`+factorial(py*1+pz)+`}$ <br><br>` ;
      document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{`+x+`^2}{(`+y+``+dot+`2 `+zplus+` `+z+`)!}= \\frac{`+x*x*x+`}{`+factorial(py*2+pz)+`}$ <br><br>` ;
  
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1)`+zplus+``+z+`)!} = \\frac{`+x+`^{n+1}}{(`+y+`n+`+(zplusy)+`)!} $` ;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^n}{(`+y+`n`+zplus+``+z+`)!} \\cdot \\frac{`+x+`}{`+slimak+`}$ <br><br>` ;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = a_n \\cdot \\frac{`+x+`}{`+slimak+`}$ <br><br>` ;
      MathJax.typeset();

    }

    //PRZYKŁAD 3
  function przyklad3_rozw(){
    document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{e^n}{5(n!)}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{e^0}{5\\cdot(0!)}= \\frac{1}{5}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{e^1}{5\\cdot(1!)}= \\frac{e}{5}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{e^2}{5\\cdot(2!)}= \\frac{e^2}{10}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{e^{n+1}}{5((n+1)!)} = \\frac{e^{n}\\cdot e}{5(n!)(n+1)} $` ;
    document.getElementById("solution").innerHTML += ` $\ = \\frac{e^n}{5(n!)} \\cdot \\frac{e}{n+1}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = a_n \\cdot \\frac{e}{n+1}$ <br><br>` ;
    MathJax.typeset();

  }
  //PRZYKŁĄD 3 WŁASNY
  function przyklad3_wlasny_rozw(){
    const px = parseFloat(document.wpisz3.x.value);

    let x = parseFloat(document.wpisz3.x.value);
    let dot = `\\cdot`

    if(x===1)
    {
      x=""
      dot = ""
    }
    
    document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{e^n}{`+x+``+dot+`(n!)}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_0 = \\frac{e^0}{`+x+``+dot+`(0!)}= \\frac{1}{`+(factorial(0))*px+`}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_1 = \\frac{e^1}{`+x+``+dot+`(1!)}= \\frac{e}{`+(factorial(1))*px+`}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_2 = \\frac{e^2}{`+x+``+dot+`(2!)}= \\frac{e^2}{`+(factorial(2))*px+`}$ <br><br>` ;

    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{e^{n+1}}{`+x+`((n+1)!)} = \\frac{e^{n}\\cdot e}{`+x+`(n!)(n+1)} $` ;
    document.getElementById("solution").innerHTML += ` $\ = \\frac{e^n}{`+x+`(n!)} \\cdot \\frac{e}{n+1}$ <br><br>` ;
    document.getElementById("solution").innerHTML += ` $\ a_{n+1} = a_n \\cdot \\frac{e}{n+1}$ <br><br>` ;
    MathJax.typeset();

  }



  // Funkcja obliczająca silnię
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}
