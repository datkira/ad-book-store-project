import Cart from './components/Cart'
import OrderDetail from './components/OrderDetail'
import { useEffect, useState } from "react";
import ApiService from "./services";

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
      {JSON.stringify(teachers)}
      <button onClick={() => console.log(teachers)}>Console</button>
      <Cart />
      <OrderDetail />
    </>
  )
}

export default App
