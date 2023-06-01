// Funkcja dodająca napis do koszyka
function addToCart(item) {
    // Sprawdzamy, czy koszyk już istnieje w localStorage
    let cart = localStorage.getItem('cart');
  
    // Jeśli koszyk nie istnieje, tworzymy pustą tablicę
    if (!cart) {
      cart = [];
    } else {
      // Jeśli koszyk istnieje, parsujemy go z formatu JSON do tablicy
      cart = JSON.parse(cart);
    }
  
    // Dodajemy napis do koszyka
    cart.push(item);
  
    // Zapisujemy zaktualizowany koszyk w localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Funkcja usuwająca napis z koszyka
  function removeFromCart(index) {
    let cart = localStorage.getItem('cart');
  
    if (cart) {
      cart = JSON.parse(cart);
  
      if (index !== -1 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(); // Refresh the displayed cart after removing the item
      }
    }
  }
  
  // Funkcja wyświetlająca zawartość koszyka
  function displayCart() {
    let cart = localStorage.getItem('cart');
  
    if (cart) {
      cart = JSON.parse(cart);
      document.getElementById("koszyk").innerHTML = "";
  
      const div = document.getElementById("koszyk");
  
      cart.forEach((item, index) => {
        div.innerHTML += item + "<br>";
        const btn = document.createElement("button");
        btn.textContent = "Usuń";
        div.appendChild(btn);
      });
  
      div.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
          const buttons = div.getElementsByTagName("button");
          const buttonIndex = Array.from(buttons).indexOf(event.target);
          removeFromCart(buttonIndex);
        }
      });
  
      MathJax.typeset();
    } else {
      document.getElementById("koszyk").innerHTML = 'Cart is empty.';
      console.log('Cart is empty.');
    }
  }
  
  // Przykładowe użycie funkcji
//   addToCart('Koszulka');
//   addToCart('Buty');
//   addToCart('Czapka');
//   displayCart();
//   removeFromCart('Buty');
//   displayCart();
  