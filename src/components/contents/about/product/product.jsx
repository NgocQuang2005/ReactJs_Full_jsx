import React from 'react'
import './../../../assets/css/about.css'
import { Formats } from '../../../functionHandling/formatsPrice'
import {  rattingStart} from './productnav'
const Product = (props) => {
    
    return (
        <div className="procuct">
            <img src={props.img} alt="" className="product-img h-[164px] w-[100%]" />
            <h5 className="my-[9px]">{props.nameshop}</h5>
            <hr />
            <div className="product-price">
                {
                    props.crprice > 0 ? (
                        <>
                            <h3 className="current-price"> {Formats.format(props.crprice)}</h3>
                            <del className="mr-[7px] ">{Formats.format(props.price)}</del>
                        </>
                    ) : (
                        <h3 className="current-price"> {Formats.format(props.price)}$</h3>
                    )
                }
                {
                    (props.crprice && props.crprice !== props.price) ? (
                        <p className="text-red-400">Discount : {(100 - Math.round(props.crprice * 100 / props.price))}% </p>
                    ) : ("")
                }
            </div>
            <h5 className="product-name h-[48px]">{props.productname}</h5>
            <div className="product--evaluate my-[7px]">
                {rattingStart(props.rate)}
            </div>
            <progress value={props.progr} max="100" />
            <p className="text-[12px]">Solid: 10</p>
            {
                (props.crprice && props.crprice !== props.price) ? (
                    <div className="percent-discount">{(100 - Math.round(props.crprice * 100 / props.price))} %</div>
                ) : ("")
            }
        </div>

    )
}

export default Product
