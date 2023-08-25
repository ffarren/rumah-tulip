import "./App.css";
import TopNavigation from "./TopNavigation"
import Jumbotron from "./Jumbotron"
import Description from"./Description"
import Testimony from "./Testimony"
import Gallery from "./Gallery"
import Booking from "./Booking"
import Footer from "./Footer"

function App() {
  return (
    <div className="bg-orange-50">
      <TopNavigation />
      <Jumbotron />
      <Description />
      <Testimony />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
