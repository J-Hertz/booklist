import Banner from "../components/Banner/Banner"
import Categories from "../components/Categories/Categories"
import Header from "../container/Header"
import "./homepage.css"



function Homepage() {
  return (
    <div className="homepage-container">
      <Header/>
      <Categories/>
      <Banner/>
    </div>
  )
}

export default Homepage