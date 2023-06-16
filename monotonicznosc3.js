function przyklad_0(){
    const x = parseFloat(document.wpisz2.x.value);
    const y = parseFloat(document.wpisz2.y.value);
    const z = parseFloat(document.wpisz2.z.value);
  
    if(x===0){
      alert("wartość x nie może sie równać 0!")
    }else if(x===1 || x===-1){

        if(y===1){
            if(z===0){
                przyklad_wlasny_1(x,y,z);
            }else{
                przyklad_wlasny_2(x,y,z);
            }
        }else{
            if(z===0){
                przyklad_wlasny_3(x,y,z);
            }else{
                przyklad_wlasny_4(x,y,z);
            }
        }
    }else if(y===1){
        if(z===0){
            przyklad_wlasny_5(x,y,z);
        }else{
            przyklad_wlasny_6(x,y,z);
        }
    }else if(z===0){
        przyklad_wlasny_7(x,y,z);
    }else{
        przyklad_wlasny_8(x,y,z);
    }
}

//x=1, y=1, z=0-----------------------------------------------------------------------
function przyklad_wlasny_1(x,y,z){


    if(x===1){
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{1^n}{n!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{1^{n+1}}{(n+1)!} = \\frac{1^{n+1}}{(n+1)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{1^{n+1}}{(n+1)!} \\cdot \\frac{n!}{1^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{1^{n}\\cdot 1}{(n+1)!} \\cdot \\frac{n!}{1^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{n!}{(n+1)\\cdot(n!)}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{1}{(n+1)}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{1}{(n+1)} < 1 $ <br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }else{
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{(-1)^n}{n!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{(-1)^{n+1}}{(n+1)!} = \\frac{(-1)^{n+1}}{(n+1)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{(-1)^{n+1}}{(n+1)!} \\cdot \\frac{n!}{(-1)^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{(-1)^{n}\\cdot (-1)}{(n+1)\\cdot(n!)} \\cdot \\frac{n!}{(-1)^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{(-1)}{(n+1)}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{(-1)}{(n+1)} < 1 $ <br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ; 
    }
}

//x=1, y=1, z=/=0-----------------------------------------------------------------------
function przyklad_wlasny_2(x,y,z){
    let znak="";
    let zplus="";
    let znakplus="";

    if(x<0){
        x=`(`+x+`)`
      }

      if(z>0){
        znak="+"
      }else{
        znak=""
      }
      if((z+1)===0){
        zplus=""
        znakplus=""
      }else if((z+1)>0){
        zplus = z+1;
        znakplus="+"
      }else{
        zplus = z+1;
        znakplus="";
      }
    
    
    
      if(x===1){
        document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{1^n}{(n`+znak+``+z+`)!} $ <br><br>`;
        document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{1^{n+1}}{(n+1`+znak+``+z+`)!} = \\frac{1^{n+1}}{(n`+znakplus+``+zplus+`)!}$<br><br>`;
        document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{1^{n+1}}{(n`+znakplus+``+zplus+`)!} \\cdot \\frac{(n`+znak+``+z+`)!}{1^{n}}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{1^{n}\\cdot 1}{(n`+znakplus+``+zplus+`)\\cdot(n`+znak+``+z+`)!} \\cdot \\frac{(n`+znak+``+z+`)!}{1^{n}}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{1}{(n`+znak+``+zplus+`)!}$<br><br>`;
        document.getElementById("solution").innerHTML += ` $\ \\frac{1}{(n`+znak+``+zplus+`)!} < 1 $ <br>`
        MathJax.typeset();
      
        document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
      }else{
        document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{(-1)^n}{(n`+znak+``+z+`)!} $ <br><br>`;
        document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{(-1)^{n+1}}{(n+1`+znak+``+z+`)!} = \\frac{(-1)^{n+1}}{(n`+znakplus+``+zplus+`)!}$<br><br>`;
        document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{(-1)^{n+1}}{(n`+znakplus+``+zplus+`)!} \\cdot \\frac{(n`+znak+``+z+`)!}{(-1)^{n}}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{(-1)^{n}\\cdot (-1)}{(n`+znakplus+``+zplus+`)\\cdot(n`+znak+``+z+`)!} \\cdot \\frac{(n`+znak+``+z+`)!}{(-1)^{n}}$`;
        document.getElementById("solution").innerHTML += ` $\ = \\frac{-1}{(n`+znakplus+``+zplus+`)}$<br><br>`;
        document.getElementById("solution").innerHTML += ` $\ \\frac{-1}{(n`+znakplus+``+zplus+`)} < 1 $ <br>`
        MathJax.typeset();
      
        document.getElementById("solution").innerHTML += "Ciąg jest malejący" ; 
      }
}

//x=1, y=/=1, z=0-----------------------------------------------------------------------
function przyklad_wlasny_3(x,y,z){
        //nawiasy przy x<0
    if(x<0){
        x=`(`+x+`)`
    }


    var slimak = ``;
        for(var i=y; i>0; i--){
            slimak += `(`+y+`n+`+i+`)`
            if(i>1){
                slimak += `\\cdot`
            }
        }
    
    
    if(x===1){
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1))!} = \\frac{`+x+`^{n+1}}{(`+y+`n+`+y+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`n+`+y+`)!} \\cdot \\frac{(`+y+`n)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{(`+y+`n+`+y+`)!} \\cdot \\frac{(`+y+`n)!}{`+x+`^n} = \\frac{1}{`+slimak+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{1}{`+slimak+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }else{
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1))!} = \\frac{`+x+`^{n+1}}{(`+y+`n+`+y+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`n+`+y+`)!} \\cdot \\frac{(`+y+`n)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{`+slimak+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{-(1)!}{`+slimak+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{-(1)!}{`+slimak+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }
}

//x=1, y=/=1, z=/=0-----------------------------------------------------------------------
function przyklad_wlasny_4(x,y,z){
    if(x<0){
        x=`(`+x+`)`
      }
      if(y===1){
        y="1"
      }
      if(z>0 || z===0){
        znak="+"
      }else{
        znak=""
      }
    
      zplus=z+y
    
      if(zplus===0){
        zplus=""
        znakplus=""
      }else if(zplus>0){
        znakplus="+"
      }else{
        znakplus=""
      }

      var slimak = ``;

      for(var i=zplus; i>z; i--){
        if(i<0){
            slimak += `(`+y+`n`+i+`)`
          if(i>(z+1)){
              slimak += `\\cdot`
          }
        }else if(i==0){
            slimak += `(`+y+`n)`
            slimak += `\\cdot`
        }else{
          slimak += `(`+y+`n+`+i+`)`
          if(i>(z+1)){
              slimak += `\\cdot`
          }
        }
      }
    
    if(x===1){
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n`+znak+``+z+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1)`+znak+``+z+`)!} = \\frac{`+x+`^{n+1}}{(`+y+`n`+znakplus+``+(zplus)+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`\\cdot n`+znakplus+``+(zplus)+`)!} \\cdot \\frac{(`+y+`\\cdot n`+znak+``+z+`)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{`+slimak+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{1}{`+slimak+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{1}{`+slimak+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }else{
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n`+znak+``+z+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1)`+znak+``+z+`)!} = \\frac{`+x+`^{n+1}}{(`+y+`n`+znakplus+``+(zplus)+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`\\cdot n`+znakplus+``+(zplus)+`)!} \\cdot \\frac{(`+y+`\\cdot n`+znak+``+z+`)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{`+slimak+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{-1}{`+slimak+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{-1}{`+slimak+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }
}

//x=/=1, y=1, z=0-----------------------------------------------------------------------
function przyklad_wlasny_5(x,y,z){
    if(x<0){
        x=`(`+x+`)`
      }
      if(y===1){
        y="1"
      }
      if(z>0 || z===0){
        znak="+"
      }else{
        znak=""
      }
    
      zplus=z+y
    
      if(zplus===0){
        zplus=""
        znakplus=""
      }else if(zplus>0){
        znakplus="+"
      }else{
        znakplus=""
      }
    
    if(x>0){
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(n)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(n+1)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(n+1)!} \\cdot \\frac{(n)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{n+1} \\cdot \\frac{1}{`+x+`^n} = \\frac{`+x+`}{n+1}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{`+x+`}{n+1} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }else{
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(n)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(n+1)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(n+1)!} \\cdot \\frac{(n)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{n+1} \\cdot \\frac{1}{`+x+`^n} = \\frac{`+x+`}{n+1}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{`+x+`}{n+1} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
    }
}

//x=/=1, y=1, z=/=0-----------------------------------------------------------------------
function przyklad_wlasny_6(x,y,z){
    if(x<0){
        x=`(`+x+`)`
      }

      if(z>0 || z===0){
        znak="+"
      }else{
        znak=""
      }
    
      zplus=z+y
    
      if(zplus===0){
        zplus=""
        znakplus=""
      }else if(zplus>0){
        znakplus="+"
      }else{
        znakplus=""
      }


    
    
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(n`+znak+``+z+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{((n+1)`+znak+``+z+`)!} = \\frac{`+x+`^{n+1}}{(n`+znakplus+``+(zplus)+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(n`+znakplus+``+(zplus)+`)!} \\cdot \\frac{(n`+znak+``+z+`)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{n`+znakplus+``+(zplus)+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{`+x+`}{n`+znakplus+``+(zplus)+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{`+x+`}{n`+znakplus+``+(zplus)+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
}

//x=/=1, y=/=1, z=0-----------------------------------------------------------------------
function przyklad_wlasny_7(x,y,z){
  if(x<0){
    x=`(`+x+`)`
  }
  if(y===1){
    y="1"
  }
  if(z>0 || z===0){
    znak="+"
  }else{
    znak=""
  }

  zplus=z+y

  if(zplus===0){
    zplus=""
    znakplus=""
  }else if(zplus>0){
    znakplus="+"
  }else{
    znakplus=""
  }


  var slimak = ``;

  for(var i=zplus; i>z; i--){
    if(i<0){
        slimak += `(`+y+`n`+i+`)`
      if(i>(z+1)){
          slimak += `\\cdot`
      }
    }else if(i==0){
        slimak += `(`+y+`n)`
        slimak += `\\cdot`
    }else{
      slimak += `(`+y+`n+`+i+`)`
      if(i>(z+1)){
          slimak += `\\cdot`
      }
    }
  }


  document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n)!}$<br><br>`;
  document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1))!} = \\frac{`+x+`^{n+1}}{(`+y+`n+`+y+`)!}$<br><br>`;
  document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
  document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`\\cdot n+`+y+`)!} \\cdot \\frac{(`+y+`\\cdot n)!}{`+x+`^n}$`;
  document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{`+slimak+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{`+x+`}{`+slimak+`}$<br><br>`;
  document.getElementById("solution").innerHTML += ` $\ \\frac{`+x+`}{`+slimak+`} < 1$<br>`
  MathJax.typeset();

  document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
}

//x=/=1, y=/=1, z=/=0-----------------------------------------------------------------------
function przyklad_wlasny_8(x,y,z){
    
    //nawiasy przy x<0
    if(x<0){
        x=`(`+x+`)`
    }
    //znak dodawania przy z>0
    if(z>0){
        znak="+"
    }else{
        znak=""
    }
    
    //wartość y+z 
    zplus=z+y
    
    //wartoścć i znak dla y+z
    if(zplus===0){
        zplus=""
        znakplus=""
    }else if(zplus>0){
        znakplus="+"
    }else{
        znakplus=""
    }


    var slimak = ``;

    for(var i=zplus; i>z; i--){
      if(i<0){
          slimak += `(`+y+`n`+i+`)`
        if(i>(z+1)){
            slimak += `\\cdot`
        }
      }else if(i==0){
          slimak += `(`+y+`n)`
          slimak += `\\cdot`
      }else{
        slimak += `(`+y+`n+`+i+`)`
        if(i>(z+1)){
            slimak += `\\cdot`
        }
      }
    }
    
    
      document.getElementById("solution").innerHTML = ` $\ a_n = \\frac{`+x+`^n}{(`+y+`n`+znak+``+z+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ a_{n+1} = \\frac{`+x+`^{n+1}}{(`+y+`(n+1)`+znak+``+z+`)!} = \\frac{`+x+`^{n+1}}{(`+y+`n`+znakplus+``+(zplus)+`)!}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{a_{n+1}}{a_n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n+1}}{(`+y+`\\cdot n`+znakplus+``+(zplus)+`)!} \\cdot \\frac{(`+y+`\\cdot n`+znak+``+z+`)!}{`+x+`^n}$`;
      document.getElementById("solution").innerHTML += ` $\ = \\frac{`+x+`^{n}\\cdot`+x+`}{`+slimak+`} \\cdot \\frac{1}{`+x+`^n} = \\frac{`+x+`}{`+slimak+`}$<br><br>`;
      document.getElementById("solution").innerHTML += ` $\ \\frac{`+x+`}{`+slimak+`} < 1$<br>`
      MathJax.typeset();
    
      document.getElementById("solution").innerHTML += "Ciąg jest malejący" ;
}