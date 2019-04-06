export function fetchStocks(stocks) {
  return {
    type: "FETCH_STOCKS",
    payload: stocks
  }
}