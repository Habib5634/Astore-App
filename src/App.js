import Banners from "./Components/Banners/Banners";
import Navbar from "./Components/Navbar/Navbar";
import HomeHead from "./Pages/HomeHead/HomeHead";
import BannerSlider from "./Components/Banners/BannerSlider"
import ClearanceSale from "./Pages/ClearanceSale/ClearanceSale";
import HandbagsBanner from "./Pages/Handbags/HandbagsBanner";
import HandBagsBanner2 from "./Pages/Handbags/HandBagsBanner2";
import Collection from "./Pages/Collections/Collection";
import WatchAndBuy from "./Pages/WatchAndBuy/WatchAndBuy";

function App() {
  return (
    <>
      <Banners/>
      <Navbar/>
      <HomeHead/>
      <BannerSlider/>
      <ClearanceSale/>
      <HandbagsBanner/>
      <HandBagsBanner2/>
      <Collection/>
      <WatchAndBuy/>
    </>
  );
}

export default App;
