import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <main className='max-h-screen flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
