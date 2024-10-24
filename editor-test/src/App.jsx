import { lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

const Main = lazy(() => import('./Home'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  )
}

export default App
