import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import HomePageBanner from "../../components/homePageBanner/HomePageBanner";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import HomeCatergories from "../../components/homeCatergories/HomeCatergories";
import CartMenu from "../global/CartMenu";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <HomeCatergories/>
      <HomePageBanner/>
      <ShoppingList />
      <Subscribe />
      <SocialMedia/>
    </div>
  );
}

export default Home;
