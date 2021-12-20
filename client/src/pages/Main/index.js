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
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">New Books</h2>
        <StoreList books={books} />
      </div>
    </div>
  );
};

export default Main;