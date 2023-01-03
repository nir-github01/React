import React from "react";
import product from "../product.model";
import './productdetail.css';

export default function ProductDetail(props) {

    return(
        <div  className="productdetail">
            <h3>{props.pname}</h3>
            <h3>{props.unitPrice}</h3>
            <h3><img src={props.imgUrl} alt={props.imgUrl}/></h3>
        </div>
    )
}