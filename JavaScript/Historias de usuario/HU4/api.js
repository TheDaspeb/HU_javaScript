const API_URL = "http://localhost:3000/products";

// GET
async function getProductsAPI() {
  const res = await fetch(API_URL);
  return await res.json();
}

// POST
async function addProductAPI(product) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
}
