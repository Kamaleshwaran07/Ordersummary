import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./Components/Summary";
import Header from "./Components/Header";

export const mycontext = createContext(" ");
const App = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 20549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 45899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 27580,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 49999,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "Samsung S24",
      description:
        "Buy the new Galaxy S24 | S24+ with Nightography Zoom and avail exclusive offers. Buy Galaxy S24 | S24+ now at zero down payment with 24 months no cost EMI.",
      price: 79999,
      discountPercentage: 10.58,
      rating: 4.59,
      stock: 32,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416055663726643/product_color_blue.webp?ex=65ea7acc&is=65d805cc&hm=44a7a934c28b476767daa78a951aebba99cf8c047fbb36fb0752a4d6c0db891c&idth=396&height=396",

        "https://media.discordapp.net/attachments/1018124413176135700/1210416031424716910/in-galaxy-s24-492654-sm-s921bzvcins-thumb-539572802.webp?ex=65ea7ac6&is=65d805c6&hm=b7af115e35b85d51649cbc0d37c0064f5b4a2b84a0d51605d4a2a6fe7ba880d8&=&format=webp&width=396&height=396",
        "https://media.discordapp.net/attachments/1018124413176135700/1210416030917070888/in-galaxy-s24-492654-sm-s921bzvcins-thumb-539572795.webp?ex=65ea7ac6&is=65d805c6&hm=95babc4439758518e1d5284a76ba316dbc5678e2958626c52078e181bf99f602&=&format=webp&width=396&height=396",
        "https://media.discordapp.net/attachments/1018124413176135700/1210415988785414184/in-galaxy-s24-492654-sm-s921bzvcins-thumb-539572792.webp?ex=65ea7abc&is=65d805bc&hm=7c957df7bf32e794a4b1eac1a56f7cef9983573a82776ac7911bf69c38dcb221&=&format=webp&width=396&height=396",
      ],
    },
    {
      id: 7,
      title: "IQOO 12",
      description:
        "iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera.",
      price: 59999,
      discountPercentage: 10.58,
      rating: 4.89,
      stock: 32,
      brand: "IQOO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://media.discordapp.net/attachments/1018124413176135700/1210415986893656074/619lW2YtVhL._SL1200_.jpg?ex=65ea7abb&is=65d805bb&hm=3b05b991438832f739336112a6e9055e1cfd613f3e7bd4107091a63263642073&=&format=webp&width=670&height=670",
        "https://media.discordapp.net/attachments/1018124413176135700/1210415986579345419/71P0B0AkteL._SL1200_.jpg?ex=65ea7abb&is=65d805bb&hm=7b02199fa17948fcc1a286fd6ee5b42f180297350d2ec422e9e3ac1ebb8df0aa&=&format=webp&width=670&height=670",
        "https://media.discordapp.net/attachments/1018124413176135700/1210415986235277373/61UqQzXz7L._SL1200_.jpg?ex=65ea7abb&is=65d805bb&hm=740c5b095eb5fc3db6a9ad8674cd1c265a79145bb53a2a519d83a394f3559aaf&=&format=webp&width=670&height=670",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415985878638592/61GJilYqwKL._SL1200_.jpg?ex=65ea7abb&is=65d805bb&hm=6745477f66b0d4924e17c399fc70828afee96c3c6191b08c678cc23782fb92ac&",

      ],
    },
    {
      id: 8,
      title: "Oneplus 12",
      description:
        "Buy OnePlus 12 5G Smartphone Online & get exchange bonus up to Rs.10000. Featuring Snapdragon 8th Gen 3, 4th-Gen Hasselblad Camera, Swift Charging, & more.",
      price: 65999,
      discountPercentage: 9.58,
      rating: 4.49,
      stock: 32,
      brand: "Oneplus",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415988483301376/304448_wswpyx.webp?ex=65ea7abc&is=65d805bc&hm=c0e5dbd2f5f10f965ba80bebe5dfd71aef99e7a534f49e78efd42a25073962c9&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415988198080513/304448_10_xlvxud.webp?ex=65ea7abc&is=65d805bc&hm=6e7ba8ff0a76f6d618dec2a9e63e47855deaef697fb1ab24c9141d99868fd35c&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415987887972403/304448_9_zxjxd5.webp?ex=65ea7abb&is=65d805bb&hm=4b9caaf77f74d2cc4fab51249abafa4afd915fc57f9f2a79780bbb486981bea5&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415987644567623/304448_5_vlwehf.webp?ex=65ea7abb&is=65d805bb&hm=43d020f9aecf82d2d7d663e6d1088d7f629c876123afdf263b46b453d21a8dfb&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210415987153960971/304448_2_d41906.webp?ex=65ea7abb&is=65d805bb&hm=48c2ae474b761351df731c995a2f0f61932c6509e6b3741048a38e3564611f3c&",

      ],
    },
    {
      id: 9,
      title: "Samsung S24 Ultra",
      description:
        "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm flat display. ... It's an absolute marvel of design. Armor up ...",
      price: 129999,
      discountPercentage: 9.58,
      rating: 4.79,
      stock: 32,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416031680565308/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573445.webp?ex=65ea7ac6&is=65d805c6&hm=581d8332e5c986b8193e8ba8be9b91ac781cb9477bb144f3d2410f5b5c579b90&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416031911387136/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573447.webp?ex=65ea7ac6&is=65d805c6&hm=8b5f9c0ca57e4e8b47b03cf2f643cfe0d0be13fc362406a9eda4d2f76bf64208&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416032137871370/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573449.webp?ex=65ea7ac6&is=65d805c6&hm=47d00810b68df69242e79d7b82d577d2ea47ed04b273baffaa4166ac5a8a3179&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416032351649792/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573461.webp?ex=65ea7ac6&is=65d805c6&hm=7cda618f78c091827b13394e90c8572d80d146c9721d282a570510ccfc933323&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416032594788412/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573464.webp?ex=65ea7ac6&is=65d805c6&hm=1c2b850de4c99c70d756e7ffcf4081cb5c4ec0ed9a7c2a4738d260778c2d64b0&",

      ],
    },
    {
      id: 10,
      title: "Pixel 8",
      description:
        "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm flat display. ... It's an absolute marvel of design. Armor up ...",
      price: 75999,
      discountPercentage: 9.58,
      rating: 4.19,
      stock: 32,
      brand: "Google",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416054828793916/Pixel_8_Pro_in_Obsidian.max-936x936.format-webp.webp?ex=65ea7acb&is=65d805cb&hm=51315105a19c6ddba9b29df2d3fd7df79c111004958fe8172a81369a7c9339ae&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416055202226186/Pixel_8_Pro_in_Porcelain.max-936x936.format-webp.webp?ex=65ea7acc&is=65d805cc&hm=acb657a81b388b849ea778f9e01a18a3209f41caf1d4e13a87ceff512058f4ab&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416054409371678/Pixel_8_Pro_in_Bay.max-936x936.format-webp.webp?ex=65ea7acb&is=65d805cb&hm=aea6b3086e8f5f7b47e95392a8c421fc239a4ef1f244ae99a2e6c3a2488aa7e1&",
        "https://cdn.discordapp.com/attachments/1018124413176135700/1210416032808964126/-original-imagtwh5euxntumw.webp?ex=65ea7ac6&is=65d805c6&hm=b0dc945e7d35c69f794587084fb26b5f6358d789e917ab2b8c8ec30d6d3665e1&",

      ],
    }

  ];
  const [data, setData] = useState(products); //storing the products in the data
 
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 0), 0
  ); // To recieve the total price and quantity  of all items in cart
  const totalCartValue = data.reduce(
    (total, data) => total + (data.quantity || 0), 0
  );

  return (
    <div>
      <mycontext.Provider value={[data, setData, totalPrice, totalCartValue]}>
        {/* // Stored all the  values that are to be used globally through out the app */}
        <Navbar totalPrice={totalPrice} totalCartValue={totalCartValue} />
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
        </Routes>

        {/* <Body /> */}
      </mycontext.Provider>
    </div>
  );
};

export default App;
