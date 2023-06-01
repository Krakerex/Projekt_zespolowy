

// Funkcja obliczająca wartość wyrazu ogólnego dla danego n
function przyklad1(n) {
    return Math.pow(3, n) / factorial(n + 3);
  }
  function przyklad2(n) {
    return (3*n+1)/(n+3);
  }
  function przyklad3(n){
    return Math.pow(3, n) / factorial(3*n);
  }
  
  // Funkcja sprawdzająca monotoniczność ciągu
  function isMonotonic(przyklad) {
    let increasing = true; // zmienna przechowująca informację o monotoniczności rosnącej
    let decreasing = true; // zmienna przechowująca informację o monotoniczności malejącej
    let constant = true; // zmienna przechowująca informację o monotoniczności malejącej
    
    for (let i = 0; i < 100; i++) { // Sprawdzamy monotoniczność na 10 pierwszych wyrazach ciągu
      for (let j = i + 1; j < 100; j++) {
        if (przyklad(j) < przyklad(i)) {
          increasing = false; // ciąg nie jest rosnący
          constant = false;
        }
        if (przyklad(j) > przyklad(i)) {
          decreasing = false; // ciąg nie jest malejący
          constant = false;
        }
        if (przyklad(j) == przyklad(i)) {
            increasing = false; // ciąg nie jest rosnący
            decreasing = false; // ciąg nie jest malejący
          }
      }
    }
    
    if (increasing) {
        document.getElementById("solution").innerHTML = "Dla n<0 i n<100 Ciąg jest rosnący." ;
    } else if (decreasing) {
        document.getElementById("solution").innerHTML = "Dla n<0 i n<100 Ciąg jest malejacy." ;
    } else if(constant){
        document.getElementById("solution").innerHTML = "Dla n<0 i n<100 Ciag jest staly." ;
    }
    else{
        document.getElementById("solution").innerHTML = "Dla n<0 i n<100 Ciąg nie jest monotoniczny." ;
    }
  }
  
  // Funkcja obliczająca silnię
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
