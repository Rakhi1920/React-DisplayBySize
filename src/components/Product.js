import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

const Product = ({index, isSale, isExclusive, productImage, price, productName, size}) => {
    const img_url = "./imgs/" + productImage
    return (
        <article className="each_product" id = {index}>
            <div className="tc">
                <div>
                    <img src={img_url} className="br-100 h4 w4 dib ba b--black-05 pa2" title={productName}/>
                </div>
                { isSale === true &&
                    <div className = "button">
                        <Button variant="contained" color="primary" className = "sale_btn btn">Sale</Button>
                    </div>  
                }

                {
                    isExclusive === true &&
                    <div className = "button">
                        <Button variant="contained" color="primary" className = "exclusive_btn btn">Exclusive</Button>
                    </div>
                }

                {
                    !isSale && !isExclusive &&
                    <div className = "button"></div>
                }
                
                <div className = "desc">
                    <span className = "product_name">{productName}</span>
                    <span className = "price">{price}</span>
                </div>
            </div>
        </article>
    )
}

export default Product;