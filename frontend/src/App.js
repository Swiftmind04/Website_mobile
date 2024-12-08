import React, { useEffect } from 'react'
import 'antd/dist/reset.css';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import { useSelector } from 'react-redux'
import axios from './axios'
import {useDispatch} from 'react-redux'
import {loginSuccess } from './redux/userSlice'
import HomePage from './pages/Home/HomePage'
import Home from './pages/admin/home/Home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/admin/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
