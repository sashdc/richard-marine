import React from "react";
import "animate.css";
import Product from "../components/Product";
import { productData } from "./productdata/productData";
// import "../styles/products.css";


export default function Products() {
  return (
    <div>
      <div className=" w-50 m-auto mt-5 animate__animated animate__fadeIn">
        <h1>PRODUCTS</h1>
      </div>
      <div className="d-flex w-75 mt-5 flex-wrap justify-content-center">
        <div className="partners  w-100">
          {productData.map((product) => (
            <Product
              name={product.name}
              url={product.url}
              img={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
