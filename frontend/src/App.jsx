import './App.css'
import Home from './components/Home'
import Shop from './components/Shop'
import Layout from "./components/layout"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='shop' element={<Shop/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
