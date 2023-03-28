const greeting = prompt("Hello! What is your name?");
const meeting = alert(`Nice to meet you ${greeting}`);
let price = 100;
let quantity = 3;
let bookLengt = ["short", "midle", "long"];

let cart = {
  book0001: 2,
  book0002: 3,
};

document.onclick = (event) => {
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
  }
};

const plusFunction = (id) => {
  cart[id]++;
  renderCart();
};

const minusFunction = (id) => {
  if (cart[id] - 1 == 0) {
    deleteFunction(id);
    return true;
  }
  cart[id]--;
  renderCart();
};

const deleteFunction = (id) => {
  delete cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};
renderCart();


// Koreys Changes 

const books = [
  {
    id: 0001,
    name: "How to do JavaScript",
    price: 100,
    quantity: 3,
    length: "long",
  },
  {
    id: 0002,
    name: "How NOT to do JavaScript",
    price: 20,
    quantity: 3,
    length: "short",
  },
];

let shoppingCart = [];

function addToCart(object) {
  shoppingCart.push(object);
}

addToCart(books[0]);

console.log(shoppingCart);
