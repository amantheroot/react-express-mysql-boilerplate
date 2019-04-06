export function fetchProducts(products) {
  return {
    type: "FETCH_Products",
    payload: products
  }
}