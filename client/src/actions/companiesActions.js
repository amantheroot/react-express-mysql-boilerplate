export function fetchCompanies(companies) {
  return {
    type: "FETCH_COMPANIES",
    payload: companies
  }
}