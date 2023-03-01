function root(){
    x=document.getElementById('podstawa').value;
    y=document.getElementById('stopien').value;
    document.getElementById('wynik').value = Math.pow(x,1/y);
}