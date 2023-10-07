import React from 'react'

const BagsFooter = () => {
    const data = [
        {
          title: "Get Your Favorite Ladies Handbags with Exceptional Quality and Service",
          p1: "The appearance of Astore on the screen is nothing less than a breath of fresh air in the fashion industry. Here you can have your desired wonderful handbags at reasonable prices. As ladies are fond of collecting different styles and sizes of handbags, so astore is the right place for you, where you can easily go through all the available styles and designs of handbags online and can grab your favorite one with just a single click.Paragraph 1 for Title 1",
          p2:"Astore provides you with a wide variety ranging from simple trendy leather bags for daily use to lavish clutches to carry on special occasions. These handbags are not only available at affordable prices but in outstanding and long-lasting quality which will never let down the customers.",
          p3:"Our store is consistently booming with a passion to create, and design handcrafted leather bags with 100% authentic and reliable quality. The superior quality of our handbags reflects the fulfillment of all quality standards, giving you the most fined and remarkable outcome. In the process, different steps are involved such as assembling and designing raw material (leather), craftsmanship, packaging, and shipping.",
        
        },
        {
          title: "How to select the accurate size and style of handbags?",
          p1: "A handbag is usually used to carry your necessities throughout the day, but it is more than just an assemble of leather pieces. It defines and reflects the personality of a woman. Women, nowadays, own the majority of ladies handbags in different sizes, styles, and colors to go for different occasions.",
          p2:"The handbag has now become a very important part of the wardrobes of modern women. Where they are labeled as fashion staples of the modernized world, they also represent several benefits for the users.",
          p3:"A wide variety of stylish, trendy, and chic handbags in beautifully attractive colors and styles are available in the market. However, to choose one, depending on the occasion and personality, requires good thinking. Being in style with handbags was never such easy for women Astore has made it accessible to pick your favorite bag online for any occasion.",
          p4:"Whether you want a shoulder bag, tote, crossbody bag, satchels, clutch, a bucket, hobo, or a backpack, you will get a huge and unique range of handbags at astore to create magic in your wardrobes.",
          p5:"Now the question arises “what do you want to carry in your handbag?” Whether you are a working lady, a college-going girl, or a mother with a toddler, you must choose the size of handbag very carefully, depending on your requirements. Mothers always look for a large size handbag to carry all baby’s necessities, while a small cute trendy clutch is a signature style for the girls to carry on weddings and parties. Astore cares about you and your needs and has launched a wide range of stylish handbags, varying from small to large sizes with fascinating colors and designs, and most importantly it retains the quality which never let you down."

        },
        {
            title: "Create Your Style with Astore",
            p1: "Are you planning to have a casual look or a formal one? This question often comes to mind while shopping for handbags. Some girls like to look funky while others want to look sophisticated, depending on the type of event. For formal attire, a nude-shaded handbag with a minimalist design will be the best option to go for. While for a wedding look, ladies should opt for handbags with bright and vibrant colors. At astore, you can get a variety of handbags, designed in beautiful styles and your favorite mesmerizing colors.",
            p2:"Ladies mostly prefer accessories that enhance their personality and add value to their attire. Astore never disappoints you in finding a handbag of your choice that fulfills all three things: uniqueness in style, high quality, and versatility. These handbags are designed keeping in mind the different preferences of women. If you are someone who loves to carry a tote bag or wants to flaunt with a bold-colored shoulder bag, you must visit a store.pk website and shop from our variety and create magic in your wardrobe.",
          
            
          },
        // Add more items as needed
      ];
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className='mx-4 sm:mx-8 md:mx-24 mb-16'>
          <h1 className='text-2xl font-bold mt-16 mb-4'>{item.title}</h1>
          <p className='text-gray-500 mb-6'>{item.p1}</p>
          <p className='text-gray-500 mb-6'>{item.p2}</p>
          <p className='text-gray-500 mb-6'>{item.p3}</p>
          <p className='text-gray-500 mb-6'>{item.p4}</p>
          <p className='text-gray-500 mb-6'>{item.p5}</p>
        </div>
      ))}
    </>
  )
}

export default BagsFooter