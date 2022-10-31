import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
