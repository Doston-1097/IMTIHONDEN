import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import AddPage from "./AddPage";
import EditPage from "./EditPage";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/FooterWrapper/Footer";
import * as React from "react";

const form = [
  {
    label: "Mahsulot rasmi",
    key: "url",
    options: { required: "Mahsulot rasmi" },
  },
  {
    label: "Mahsulot nomi",
    key: "name",
    options: { required: "Mahsulot nomi" },
  },
  {
    label: "Mahsulot narxi",
    key: "price",
    options: { required: "Mahsulot narxi" },
  },
];

const ProductPage = ( {productDatas,setProduct}) => {
  const navigate = useNavigate();

  const actions = {
    edit: (index) => {
      navigate(`edit/${index}`);
    },
    delete: (index) => {

      let arr1 = productDatas.slice(0, index);
      let arr2 = productDatas.slice(index + 1);
      arr2.map((el) => {
        arr1.push(el);
      });

      productDatas=arr1
      setProduct(arr1);
    },
  };

  return (
    <>
      <div className="mb-3 d-flex align-items-center justify-content-center flex-column">

        <h1 className="head-h1">Mahsulotlar</h1>

        <Link to="add">
          <Button  sx={{border:"2px solid black",height:"50px",color:"black",fontSize:"20px",borderRadius:"10px"}}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Link>
      </div>

      <Cards productW={productDatas}  actions={actions}/>
      <div className="line"></div>
      <Footer/>
    </>
  );
};

export default function Products({productDatas,setProduct}) {
  console.log(productDatas)
  return (
    <>
      <Routes>
        <Route path="add" element={<AddPage form={form} />} />
        <Route path="/edit/:id" element={<EditPage form={form} />} />
        <Route
          path="/"
          element={
            <>
              <ProductPage productDatas={productDatas} setProduct={setProduct} ></ProductPage>
            </>
          }
        />
      </Routes>
    </>
  );
}
