import Navbar from './components/Navbar'
import SimilarProducts from './components/SimilarProducts'
import Footer from './components/Footer'
import AMP614272004 from './components/AMP614272004'

function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <AMP614272004 />
        <SimilarProducts />
      </main>
      <Footer />
    </div>
  )
}

export default App
