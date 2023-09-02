import CartMenu from "../scenes/global/CartMenu";
import Footer from "../scenes/global/Footer";
import Navbar from "../scenes/global/Navbar";
import MobileMenu from "../components/mobileMenu/MobileMenu";
export default function Layout({ children }) {

  
  return (
    <>
      <CartMenu />
      <MobileMenu />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
