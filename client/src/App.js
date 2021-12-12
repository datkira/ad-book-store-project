import Cart from './components/Cart'
import OrderDetail from './components/OrderDetail'
import { useEffect, useState } from "react";
import ApiService from "./services";
import Form from "./components/Form";

function App() {
  const [teachers, setTeachers] = useState([])
  const service = new ApiService()
  useEffect(() => {
    service.getAllTeachers().then(data => {
      setTeachers(data)
    })
  }, [])
  return (
    <>
      {/*{JSON.stringify(teachers)}*/}
      <Form/>
      <Cart />
      <OrderDetail />
    </>
  )
}

export default App
