import React, { useEffect, useState } from "react";
import StoreList from "../../components/StoreList";
import ApiService from "../../services";
import { useHistory, useParams, withRouter } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const service = new ApiService();
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    service.getAllBooksWithCategoryID(params.id).then(data => {
      if (data?.recordset.length > 0) {
        setCategories(data.recordset)
      } else {
        history.push('/')
      }    });
  }, [params.id]);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Category</h2>
        <StoreList books={categories} />
      </div>
    </div>
  );
};

export default withRouter(Category);