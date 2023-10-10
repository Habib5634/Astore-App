import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Handbags from "./Pages/Collections/Handbags/Handbags";
import CosmeticBags from "./Pages/Collections/Handbags/CosmeticBags/CosmeticBags";
import ArcylicBag from "./Pages/Collections/Handbags/ArcylicBag/ArcylicBag";
import CustomerReviewsPage from "./Pages/CustomerReviews/CustomerReviewsPage";
import EngraveyardBag from "./Pages/Collections/Handbags/Engravedyardbag/EngraveyardBag";
import ProductDetailPage from "./Pages/ProductDetail/ProductDetailPage";
import CartPage from "./Pages/CartContext/Cart";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/collections/handbags' element={<Handbags/>}/>
      <Route path='/collections/handbags/:layoutType' element={<Handbags/>}/>
      <Route path='/collections/handbags/cosmeticbag' exact element={<CosmeticBags/>}/>
      <Route path='/collections/handbags/arcylicbag' exact element={<ArcylicBag/>}/>
      <Route path='/customerreviews' exact element={<CustomerReviewsPage/>}/>
      <Route path='/collections/handbags/engraveyard' exact element={<EngraveyardBag/>}/>
      <Route path='/product-detail-page/:id' exact element={<ProductDetailPage/>}/>
      <Route path='/cart' exact element={<CartPage/>}/>

    </Routes>
      
    </>
  );
}

export default App;
