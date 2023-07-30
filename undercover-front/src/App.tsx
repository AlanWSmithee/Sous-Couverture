
import './App.css'
import { Outlet } from 'react-router-dom'

export function App() {

  return (
    <>
      <h1>Sous-Couverture</h1>
      <Outlet />
    </>
  )
}

export default App
