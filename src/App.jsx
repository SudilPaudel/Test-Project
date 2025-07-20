
import NavBar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import Footer from "./componenets/Footer";
import { useState } from "react";
import Form from "./componenets/Form";
import RamroForm from "./componenets/RamroForm";




function App() {
  
const names = ["Ali", "Ram" , "Shayam"]
for(let name of names){
console.log(`Hello ${name}`)
}
const phone_models =["Samsung", "Apple", "One Plus"];
for(let phone of phone_models){
  console.log(`Phone Model: ` + phone)
}
const product = {
  model: "iphone 14",
  releaseYear: 2024,
  description: "128 Gb",
  price: 70000
}
const {model, description, price} = product
console.log(`Product: ${model}, Product Description: ${description}, Product Price: ${price}`)

const topSellingProduct = ["iphone14", "Samsung S23", "oneplus 11R"];
const generalProduct = ["Honor y1", "Redmi c30", "realme C11"];
const TotalProduct = [...topSellingProduct, ...generalProduct]
console.log(TotalProduct)
  return (
   <>
  {/* <NavBar meroName="Sudil Paudel" home="Ghar"/>
  <HeroSection />
  <Footer hotelname="Everest hotel"/> */}
  {/* <Form /> */}
  <RamroForm />
   </>
    
  )
}

export default App
