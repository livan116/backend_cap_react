
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import NewJob from './components/NewJob';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/newjob' element={<NewJob/>}/>
        <Route path='/editJob/:id' element={<NewJob/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
