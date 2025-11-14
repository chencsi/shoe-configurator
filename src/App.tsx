import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
    <>
      <main className='min-h-screen max-w-[1200px] mx-auto'>
        <Home />
      </main>
      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </>
  )
}

export default App
