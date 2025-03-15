import Contextdata from './ContextArr'
import Header from './Header.jsx'
import FavouriteList from './FavouriteList.jsx'
import AllList from './AllList.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Contextdata>
          <Header></Header>
        
          <Routes>
            <Route path='/' element={<AllList />}></Route>
            <Route path='/list' element={<FavouriteList />}></Route>
          </Routes>
        </Contextdata>
      </BrowserRouter>


    </>
  )
}

export default App
