import CartMenu from "../scenes/global/CartMenu";
import Footer from "../scenes/global/Footer";
import Navbar from "../scenes/global/Navbar";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import WishList from "../scenes/global/WishList";


export default function Layout({ children }) {

  return (
    <>
      <CartMenu />
      <WishList/>
      <MobileMenu />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
