import Header from "./Component/header"
import Footer from "./Component/footer"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/home"
import Blog from "./pages/blog"
import About from "./pages/About"
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
          <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App
