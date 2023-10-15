import './App.css'
import { Outlet } from 'react-router-dom'
import { AppNavBar } from './component/navbar/app-navbar'
import { AppFooter } from './component/footer/app-footer'

export function App() {
  return (
    <>
      <AppNavBar />
      <h1>Sous-Couverture</h1>
      <div className="p-12 w-9/12 max-w-screen-xl m-auto">
        <Outlet />
      </div>
      <AppFooter />
    </>
  )
}

export default App
