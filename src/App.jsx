import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <h1>App</h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
