import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import HomePageBanner from "../../components/homePageBanner/HomePageBanner";
import SocialMedia from "../../components/socialMedia/SocialMedia";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <HomePageBanner/>
      <ShoppingList />
      <Subscribe />
      <SocialMedia/>
    </div>
  );
}

export default Home;
