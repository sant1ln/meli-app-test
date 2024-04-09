import { AppRouter } from './Routes'
import { Navbar } from './components/Navbar'
import { MainProvider } from './context/main/MainProvider'
import './App.css'

function App() {

  return (
    <main>
        <MainProvider>
          <Navbar />       
          <AppRouter />
        </MainProvider>
    </main>
  )
}

export default App
