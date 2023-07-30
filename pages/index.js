import Home from "../scenes/home/Home";
import Navbar from "../scenes/global/Navbar";
import Footer from "../scenes/global/Footer";
import CartMenu from "../scenes/global/CartMenu";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CartMenu />
      <Home />
      <Footer />
    </>
  );
}
