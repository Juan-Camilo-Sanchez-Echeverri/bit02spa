import NavBar from "../components/navBar/NavBar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default Home;
