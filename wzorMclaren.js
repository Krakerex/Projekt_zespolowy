function maclaurinSeries(func, x, n) {
    let sum = func(0);
    let term = 1;
    for (let i = 1; i <= n; i++) {
      term *= x / i;
      sum += term * func.derivative(i)(0);
    }
    return func(0) + sum;
  }
  
  // Przykładowe funkcje matematyczne
  const f1 = {
    func: (x) => Math.sin(x),
    derivative: (n) => {
      if (n % 4 === 0) return (x) => Math.sin(x);
      if (n % 4 === 1) return (x) => Math.cos(x);
      if (n % 4 === 2) return (x) => -Math.sin(x);
      if (n % 4 === 3) return (x) => -Math.cos(x);
    },
  };
  
  const f2 = {
    func: (x) => Math.exp(x),
    derivative: (n) => (x) => Math.exp(x),
  };
  
  const f3 = {
    func: (x) => Math.cos(x),
    derivative: (n) => {
      if (n % 4 === 0) return (x) => Math.cos(x);
      if (n % 4 === 1) return (x) => -Math.sin(x);
      if (n % 4 === 2) return (x) => -Math.cos(x);
      if (n % 4 === 3) return (x) => Math.sin(x);
    },
  };
  function approxExp(x) {
    return "e^(2x) = 1 + 2x + (2x)^2/2! + (2x)^3/3! + ...";
  }
  
  
  function ff1(){

    var x = 0.2;
    var result = Math.exp(2*x);
    document.getElementById("solution").innerHTML = "Wynik dla x=" + x + ": " + result;}
  