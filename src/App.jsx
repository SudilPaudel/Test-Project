
import NavBar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import Footer from "./componenets/Footer";
import { useState } from "react";
import Form from "./componenets/Form";
import RamroForm from "./componenets/RamroForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";
import Rooms from "./pages/Rooms";
import Layout from "./pages/layouts/Layout";
import API from "./pages/API";




function App() {

  const names = ["Ali", "Ram", "Shayam"]
  for (let name of names) {
    console.log(`Hello ${name}`)
  }
  const phone_models = ["Samsung", "Apple", "One Plus"];
  for (let phone of phone_models) {
    console.log(`Phone Model: ` + phone)
  }
  const product = {
    model: "iphone 14",
    releaseYear: 2024,
    description: "128 Gb",
    price: 70000
  }
  const { model, description, price } = product
  console.log(`Product: ${model}, Product Description: ${description}, Product Price: ${price}`)

  const topSellingProduct = ["iphone14", "Samsung S23", "oneplus 11R"];
  const generalProduct = ["Honor y1", "Redmi c30", "realme C11"];
  const TotalProduct = [...topSellingProduct, ...generalProduct]
  console.log(TotalProduct)
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
             <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="api" element={<API />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
