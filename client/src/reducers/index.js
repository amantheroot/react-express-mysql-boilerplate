import { combineReducers } from "redux";

import companies from "./companiesReducer";
import products from "./productsReducer";
import stocks from "./stocksReducer";
import customers from "./customersReducer";
import suppliers from "./suppliersReducer";
import orders from "./ordersReducer";

export default combineReducers({
  companies,
  products,
  stocks,
  customers,
  suppliers,
  orders
});
