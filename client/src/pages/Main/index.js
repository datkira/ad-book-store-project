import React, { useEffect, useState } from "react";
import StoreList from "../../components/StoreList";
import ApiService from "../../services";

const Main = () => {
  const [books, setBooks] = useState([]);
  const service = new ApiService();
  useEffect(() => {
    service.getAllBooks().then(data => {
      setBooks(data.recordset);
    });
  }, []);
  return (
    <StoreList books={books}/>
  );
};

export default Main;