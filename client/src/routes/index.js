import React from "react";
import Main from "../pages/Main";
import Form from "../components/Form";
import OrderDetail from "../components/OrderDetail";
import Cart from "../components/Cart";
import BookDetail from "../components/BookDetail";
import Queue from "../components/Queue";
import Search from "../components/Search";

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
    path: "/queue",
    exact: true,
    component: () => <Queue />
  },
  {
    path: "/search",
    exact: true,
    component: () => <Search />
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
    path: "/book/:id",
    exact: true,
    component: () => <BookDetail />
  }
];

export { ViewRoutes };
