import Navbar from "./component/navbar"
import "./App.css"
import AboutUs from "./component/aboutUs"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <AboutUs/>
    </div>
  )
}

export default App
