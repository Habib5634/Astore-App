import Banners from "./Components/Banners/Banners";
import Navbar from "./Components/Navbar/Navbar";
import HomeHead from "./Pages/HomeHead/HomeHead";
import BannerSlider from "./Components/Banners/BannerSlider"
import ClearanceSale from "./Pages/ClearanceSale/ClearanceSale";
import HandbagsBanner from "./Pages/Handbags/HandbagsBanner";
import HandBagsBanner2 from "./Pages/Handbags/HandBagsBanner2";
import Collection from "./Pages/Collections/Collection";
import WatchAndBuy from "./Pages/WatchAndBuy/WatchAndBuy";
import HandBagsBanner3 from "./Pages/Handbags/HandBagsBanner3";
import CustomerReviewBanner from "./Pages/CustomerReviews/CustomerReviewBanner";
import CustomerReviews from "./Pages/CustomerReviews/CustomerReviews";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Banners/>
      <Navbar/>
      <HomeHead/>
      <BannerSlider/>
      <ClearanceSale/>
      <HandbagsBanner/>
      <div className="px-0 sm:px-4 md:px-16">
      <HandBagsBanner2/>
      <Collection/>
      </div>
      <WatchAndBuy/>
      <HandBagsBanner3/>
      <CustomerReviewBanner/>
      <CustomerReviews/>
      <Footer/>
    </>
  );
}

export default App;
