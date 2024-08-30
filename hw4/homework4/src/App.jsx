import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Filter from './Component/Filter'
import GiftItem from './Component/GiftItem'
import Modal from './Component/Modal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Filter />
      <GiftItem />
      <Modal />
    </div>
  )
}

export default App
