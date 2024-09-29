import Navbar from "./components/navbar"
import Search from "./components/search"
import Product from "./components/products"
import Aboutus from "./components/about"
import Contact from "./components/contact"

function App()
{
    return(
        <div>
          <Navbar />
          <Search />
          <Product />
          <Aboutus />
          <Contact />
        </div>
      )
}

export default App

// Rendering the components
