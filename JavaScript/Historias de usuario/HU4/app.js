const form = document.getElementById("productForm");
const list = document.getElementById("productList");

let products = JSON.parse(localStorage.getItem("products")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();

  if (!name || price <= 0) {
    console.error("Datos inválidos");
    return;
  }

  const product = {
    id: Date.now(),
    name,
    price
  };

  products.push(product);
  saveToLocalStorage();
  renderProducts();
  form.reset();
});

function renderProducts() {
  list.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";

    btn.addEventListener("click", () => {
      deleteProduct(product.id);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}


function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveToLocalStorage();
  renderProducts();
}

renderProducts(); // Al cargar la página


addProductAPI(product)
  .then(() => console.log("Producto guardado en API"))
  .catch(err => console.error(err));
