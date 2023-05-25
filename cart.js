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
  function removeFromCart(item) {
    // Pobieramy koszyk z localStorage
    let cart = localStorage.getItem('cart');
  
    // Jeśli koszyk istnieje, parsujemy go z formatu JSON do tablicy
    if (cart) {
      cart = JSON.parse(cart);
  
      // Usuwamy napis z koszyka
      const index = cart.indexOf(item);
      if (index !== -1) {
        cart.splice(index, 1);
      }
  
      // Zapisujemy zaktualizowany koszyk w localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  
  // Funkcja wyświetlająca zawartość koszyka
  function displayCart() {
    // Pobieramy koszyk z localStorage
    let cart = localStorage.getItem('cart');
  
    // Jeśli koszyk istnieje, parsujemy go z formatu JSON do tablicy
    if (cart) {
      cart = JSON.parse(cart);
  
      // Wyświetlamy zawartość koszyka
      console.log('Cart:', cart);
      MathJax.typeset();
  
      // Tutaj można zaimplementować kod do wyświetlania koszyka na stronie
      // np. generowanie listy produktów, sumy koszyka itp.
    } else {
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
  