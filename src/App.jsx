import { useState } from 'react'
import Login from "./pages/Login"
import OAuthRedirect from "./pages/OAuthRedirect"
import Dashboard from "./pages/Dashboard"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/oauth2/redirect" element={<OAuthRedirect/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
