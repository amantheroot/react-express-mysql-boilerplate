export function fetchProducts(products) {
  return {
    type: "FETCH_PRODUCTS",
    payload: products
  }
}