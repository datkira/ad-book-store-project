import React, { useEffect, useState } from "react";
import StoreList from "../../components/StoreList";
import ApiService from "../../services";

const Main = () => {
  // const [teachers, setTeachers] = useState([]);
  // const service = new ApiService();
  // useEffect(() => {
  //   service.getAllTeachers().then(data => {
  //     setTeachers(data);
  //   });
  // }, []);
  return (
    <StoreList />
  );
};

export default Main;