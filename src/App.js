
import GlobalStyle from "./styles/global";
import Layout from "./Layout";
import Products from "./pages/products/Products";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import Notfound from "./pages/Not found/Notfound";
import Header from "./components/Header";
import productData from "./data/products";

import * as React from "react";

const App = () => {

    const [product,setProduct] =useState(productData)
    useEffect(()=>{

    },[product])
    console.log(product)

  return (
      <>
          <GlobalStyle />
          <Layout>
              <Header/>
              <Routes>
                  <Route path="/*" element={<Products productDatas={product} setProduct={setProduct} />} />
                  <Route path="*" element={<Notfound />} />
              </Routes>


          </Layout>
      </>

  );
};

export default App;
