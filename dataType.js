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