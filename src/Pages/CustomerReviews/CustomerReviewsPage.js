import React from 'react'
import Banners from '../../Components/Banners/Banners'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer';

const CustomerReviewsPage = () => {
    const images = [
        'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244457060_273068981343679_7707322561148717285_n_144_11zon_480x480.jpg?v=1670229816',
        'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244564174_1229408100896511_4755641428489768057_n_145_11zon_480x480.jpg?v=1670229828',
        'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244457060_273068981343679_7707322561148717285_n_144_11zon_480x480.jpg?v=1670229816',
        'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244569886_887245728575076_4674561155895902518_n_146_11zon_480x480.jpg?v=1670229837',
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244575535_629219751577273_4956832241480107701_n_147_11zon_480x480.jpg?v=1670229869",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244782534_843739952952196_2115881947958270927_n_158_11zon_480x480.jpg?v=1670230123",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244782534_843739952952196_2115881947958270927_n_158_11zon_480x480.jpg?v=1670230123",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244782534_843739952952196_2115881947958270927_n_158_11zon_480x480.jpg?v=1670230123",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244782534_843739952952196_2115881947958270927_n_158_11zon_480x480.jpg?v=1670230123",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244971882_352823479769564_258855914228505256_n_163_11zon_480x480.jpg?v=1670230177",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/245078815_261062916026918_4801693577148039331_n_166_11zon_480x480.jpg?v=1670230228",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/245078815_261062916026918_4801693577148039331_n_166_11zon_480x480.jpg?v=1670230228",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/245078815_261062916026918_4801693577148039331_n_166_11zon_480x480.jpg?v=1670230228",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244791617_4038445919592606_3188534986548772292_n_160_11zon_480x480.jpg?v=1670230147",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244791617_4038445919592606_3188534986548772292_n_160_11zon_480x480.jpg?v=1670230147",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244791617_4038445919592606_3188534986548772292_n_160_11zon_480x480.jpg?v=1670230147",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244791617_4038445919592606_3188534986548772292_n_160_11zon_480x480.jpg?v=1670230147",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/244791617_4038445919592606_3188534986548772292_n_160_11zon_480x480.jpg?v=1670230147",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/245794276_121584826925551_3182356547920428268_n_172_11zon_480x480.jpg?v=1670230307",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/246373385_1243275889433288_7425420786394442176_n_181_11zon_480x480.jpg?v=1670230437",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/246373385_1243275889433288_7425420786394442176_n_181_11zon_480x480.jpg?v=1670230437",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/246373385_1243275889433288_7425420786394442176_n_181_11zon_480x480.jpg?v=1670230437",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/246373385_1243275889433288_7425420786394442176_n_181_11zon_480x480.jpg?v=1670230437",
        "https://cdn.shopify.com/s/files/1/0268/0602/6426/files/245794276_121584826925551_3182356547920428268_n_172_11zon_480x480.jpg?v=1670230307",
    ];
  return (
    <>
    <Banners/>
      <Navbar/>
      <h1 className='text-6xl text-gray-900 text-center mt-10 font-semibold'>Customer Reviews</h1>

      <div className='flex flex-wrap justify-center m-1 mx-2'>
            {images.map((imageUrl, index) => (
                <div key={index} className='w-5/6 sm:w-5/12 md:w-1/5 mx-1 p-1'>
                    <img className='h-full w-full' src={imageUrl} alt={`img${index}`} />
                </div>
            ))}
        </div>
<Footer/>
    </>
  )
}

export default CustomerReviewsPage