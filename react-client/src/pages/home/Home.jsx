import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="homeIn">
          <Featured />
        </div>
        <h1 className="homeTitle">Browse by property type</h1>
        <div className="homeIn">
          <PropertyList />
        </div>
        <h1 className="homeTitle">Homes guests love</h1>
        <div className="homeIn">
          <FeaturedProperties />
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
