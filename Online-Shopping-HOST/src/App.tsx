// import { Products } from 'remoteApp/ProductList'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'

import './App.css'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
