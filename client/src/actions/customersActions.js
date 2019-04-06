export function fetchCustomers(customers) {
  return {
    type: "FETCH_CUSTOMERS",
    payload: customers
  }
}