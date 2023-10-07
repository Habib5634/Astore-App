const data = [
    {
      id: 1,
      imageUrl: 'https://astore.pk/cdn/shop/files/maroon1_49bf5a9c-d31e-4b89-859f-73fced54e325_360x.jpg?v=1686558270',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/drmadihaweb2_a8d1a043-9230-4fb1-89a4-f5082858a23a_360x.jpg?v=1686558270',
      title:"Hip Hop bag Maron",
      category:["shoulderbag"],
      price:' 2,499',
      realPrice:'4,000',
      rating: 4.5,
      reviews:"38"

    },
    {
      id: 2,
      imageUrl: 'https://astore.pk/cdn/shop/files/7_aedd0e06-00ae-4eb0-b728-c96f52a3ea35.jpg?v=1687784308',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-1_4501c1d9-eff3-4e31-b3c6-f9416ecead27.jpg?v=1687784308',
      title:"Verona Tote Bag Black",
      category:["shoulderbag","totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 3,
      imageUrl: 'https://astore.pk/cdn/shop/files/1-6_7a5a2ea3-25f5-4e24-aad1-e4de514b0136.jpg?v=1685796012',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/3_3d7409a6-627c-4313-88f4-c1305da9992f.jpg?v=1685796012',
      title:"Coco Bag Peach",
      category:["shoulderbag"],
      price:' 1,999',
      realPrice:'7,000',
      rating: 4.5,
      reviews:"7"
    },
    {
      id: 4,
      imageUrl: 'https://astore.pk/cdn/shop/files/5_a7dcbc23-abdd-48a5-89a0-3b878d1a97fb.jpg?v=1687610292',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/chefaqwebsite1.jpg?v=1687610292',
      title:"Clearent Bag Green ",
      category:["shoulderbag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 4.5,
      reviews:"68"
    },
    {
      id: 5,
      imageUrl: 'https://astore.pk/cdn/shop/files/amplebrown.jpg?v=1686579032',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/image_2af63cd6-bf2c-43eb-a577-4a65bae757ae.jpg?v=1686579032',
      title:"Ample Bag Brown",
      category:["shoulderbag","totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 6,
      imageUrl: 'https://astore.pk/cdn/shop/files/pouchsizesuedebrown.jpg?v=1686992070',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-2_e25c0134-cdce-4345-a005-1dc04fb325cc.jpg?v=1686992070',
      title:"Pouch Size Shoulder Bag",
      category:["shoulderbag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 7,
      imageUrl: 'https://astore.pk/cdn/shop/files/1-96.png?v=1695048432',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/files/1-95.png?v=1695048432',
      title:"Verona Tote bag Brown",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 8,
      imageUrl: 'https://astore.pk/cdn/shop/files/black12.jpg?v=1687786381',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/black1_2443debe-ac1e-45d7-8a23-0ac212c7bb61.jpg?v=1687786381',
      title:"Wide Bag Black",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 9,
      imageUrl: 'https://astore.pk/cdn/shop/files/griptotebagbrown.jpg?v=1687177827',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/2-2_daacd442-b943-4f69-9121-a1f19d9e73be.jpg?v=1687177827',
      title:"Grip Tote Bag Brown",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 10,
      imageUrl: 'https://astore.pk/cdn/shop/files/griptotebagblack.jpg?v=1687177810',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-4_cbd8b521-0bb3-4332-b975-76aec1494c16.jpg?v=1687177810',
      title:"Grip Tote Bag Black",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 11,
      imageUrl: 'https://astore.pk/cdn/shop/files/amplesuedemaroon.jpg?v=1686578992',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/4_55166681-7b5c-4a66-999e-40fee2cf8e43.jpg?v=1686578992',
      title:"Ample Bag  ",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 12,
      imageUrl: 'https://astore.pk/cdn/shop/files/ampleblack.jpg?v=1686579021',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/8_7982b132-2809-4ad9-9458-b2b85b9ca759.jpg?v=1686579021',
      title:"Ample Bag Black",
      category:["totebag"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 13,
      imageUrl: 'https://astore.pk/cdn/shop/files/dottedbeige.jpg?v=1686922745',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-13_96690a5c-9124-496c-864d-922c07abffe7.jpg?v=1686922745',
      title:"Dotted Bag Biegi",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 14,
      imageUrl: 'https://astore.pk/cdn/shop/files/dottedblack.jpg?v=1686922771',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/Black8.jpg?v=1686922771',
      title:"Dotted Bag Black",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 15,
      imageUrl: 'https://astore.pk/cdn/shop/files/dottedbrown.jpg?v=1686922759',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-14_d3352ff6-15cf-42c2-ac12-4ac49a4c7aca.jpg?v=1686922759',
      title:"Dotted Bag Brown",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 16,
      imageUrl: 'https://astore.pk/cdn/shop/products/Maroon9.jpg?v=1686923805',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/files/dottedmaroon.jpg?v=1686923805',
      title:"Dotted Bag Maroon",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 17,
      imageUrl: 'https://astore.pk/cdn/shop/products/Peach7.jpg?v=1686923767',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/files/dottedpeach.jpg?v=1686923767',
      title:"Dotted Bag Peach",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 18,
      imageUrl: 'https://astore.pk/cdn/shop/files/canberraBeige.jpg?v=1692013379',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/beige4_43c29a24-dca1-4bbf-b6a3-f101f747370d.jpg?v=1692013379',
      title:"Canberra Bag Biegi",
      category:["crossbody"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 19,
      imageUrl: 'https://astore.pk/cdn/shop/products/MaroonTasselskull_360x.jpg?v=1602413989',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/files/Untitled-251_360x.jpg?v=1689353925',
      title:"Woman Tessel Suede Maroon",
      category:["bucket"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 20,
      imageUrl: 'https://astore.pk/cdn/shop/files/servicebrown_360x.jpg?v=1687526823',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/service2_360x.jpg?v=1687526823',
      title:"Service Bag Brown",
      category:["handle"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 21,
      imageUrl: 'https://astore.pk/cdn/shop/files/brown1_84c983d5-674a-43aa-9205-1bd3bcd91a8c_360x.jpg?v=1686839496',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/brownacrylicbag_360x.jpg?v=1686839496',
      title:"Acrylic Bag Brown",
      category:["handle"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 22,
      imageUrl: 'https://astore.pk/cdn/shop/files/floweretbagmaroon_360x.jpg?v=1686575642',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/danneereditedwebsite1_96ad3a10-c39d-402c-b722-b3a6da2e0123_360x.jpg?v=1686575642',
      title:"Floweret Bag Brown",
      category:["handle"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 23,
      imageUrl: 'https://astore.pk/cdn/shop/files/1_127c105d-9de4-49e6-8fcf-5198df346591_360x.jpg?v=1685799312',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-3_44e9ea53-4bc6-48c6-8c8c-9901f8c713bd_360x.jpg?v=1685799312',
      title:"Eensy Bag Brown",
      category:["handle"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 24,
      imageUrl: 'https://astore.pk/cdn/shop/products/newarrivals7_360x.jpg?v=1660990059',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/newarrivals2_360x.jpg?v=1660990059',
      title:"Filly Bag Peach",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 25,
      imageUrl: 'https://astore.pk/cdn/shop/products/1-2_3c6dcdee-0e29-462a-b3a9-8c2b8a0b0e36_360x.jpg?v=1665066679',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/f-11shoot13_360x.jpg?v=1677153337',
      title:"Filly bag White",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 26,
      imageUrl: 'https://astore.pk/cdn/shop/products/beige1_d7ca3e37-498c-4ba2-af53-5aaa7a983ecb_360x.jpg?v=1676128324',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/beige2_abce6f73-96fc-40de-ad66-74df3c3225e5_360x.jpg?v=1676128324',
      title:"Corvette Bag Beigi",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 27,
      imageUrl: 'https://astore.pk/cdn/shop/products/peach4_88346bd0-d581-444d-a9c2-41fa9af35a00_360x.jpg?v=1676277037',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/4_d6b03d7d-eff5-4ee6-a73f-827068c96737_360x.jpg?v=1676277037',
      title:"Corvette Bag Peach",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 28,
      imageUrl: 'https://astore.pk/cdn/shop/products/1_87280eac-20ec-4d11-8d27-dd09408b1c14_360x.jpg?v=1651139897',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/newarrival4313_360x.jpg?v=1652346743',
      title:"Corvette Bag Black",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 29,
      imageUrl: 'https://astore.pk/cdn/shop/products/1_b8f49b80-976e-4ac7-8185-9ab05d877db7_360x.jpg?v=1649775288',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/44_29f6cb47-c07e-42aa-b8e9-16dd935184a1_360x.jpg?v=1652449357',
      title:"Icon Bag White",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    {
      id: 30,
      imageUrl: 'https://astore.pk/cdn/shop/products/3-2_d21fb90b-69b9-4315-9df8-696475925f58_360x.jpg?v=1661432635',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/3-3_ed29d8f5-1a91-4556-bb8f-9b8d3901179d_360x.jpg?v=1661432635',
      title:"Icon Bag Black",
      category:["premium"],
      price:' 2,499',
      realPrice:'5,250',
      rating: 3.5,
      reviews:"68"
    },
    
    // Add more items as needed
  ];
  
  export default data;
  