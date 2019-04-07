export function fetchOrders(orders) {
  return {
    type: "FETCH_ORDERS",
    payload: orders
  }
}