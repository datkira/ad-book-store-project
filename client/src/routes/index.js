import React from "react";
import Main from "../pages/Main";
import Form from "../components/Form";
import OrderDetail from "../components/OrderDetail";
import Cart from "../components/Cart";
import BookDetail from "../components/BookDetail";

const ViewRoutes = [
  {
    path: "/",
    exact: true,
    component: () => <Main />
  },
  {
    path: "/add-book",
    exact: true,
    component: () => <Form />
  },
  {
    path: "/order-detail",
    exact: true,
    component: () => <OrderDetail />
  },
  {
    path: "/cart",
    exact: true,
    component: () => <Cart />
  },
  {
    path: "/book",
    exact: true,
    component: () => <BookDetail />
  }
];

export { ViewRoutes };
