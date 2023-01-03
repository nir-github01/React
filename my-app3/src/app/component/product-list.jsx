import React from "react";
import ProductDetail from "./product-detail";
import PRODUCTS from "./products.js"


function ProductList (){
    return (
        <div className="ProductList">
         <ul>
            <li>
                <ProductDetail pname={PRODUCTS[0].pname} unitPrice={PRODUCTS[0].unitPrice} imgUrl={PRODUCTS[0].imgUrl}/>
            </li>
            <li>
                <ProductDetail pname={PRODUCTS[1].pname} unitPrice={PRODUCTS[1].unitPrice} imgUrl={PRODUCTS[1].imgUrl}/>
            </li>
            <li>
                <ProductDetail pname={PRODUCTS[2].pname} unitPrice={PRODUCTS[2].unitPrice} imgUrl={PRODUCTS[2].imgUrl}/>
            </li>
            <li>
                <ProductDetail pname={PRODUCTS[3].pname} unitPrice={PRODUCTS[3].unitPrice} imgUrl={PRODUCTS[3].imgUrl}/>
            </li>
         </ul>
        </div>
    )
}

export default ProductList;