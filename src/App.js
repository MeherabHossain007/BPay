import React from 'react'
import Layout from './components/Layout'
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import SignUp from './auth/SignUp';
function App() {
  return (
    <div className="App">
    <Layout/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="login" element={<Login/>} />
      <Route path="login" element={<SignUp/>} />
    </Routes>
  </div>
  )
}
export default App
