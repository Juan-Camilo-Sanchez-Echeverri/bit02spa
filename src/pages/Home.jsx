import NavBar from "../components/navBar/NavBar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
    </div>
  );
}

export default Home;
