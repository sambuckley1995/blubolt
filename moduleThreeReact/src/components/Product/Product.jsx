import React from "react";
import "./Product.scss"

const Product = (props) => {
    return (
        <section className="productCard">
            <div>
                <img src={props.collectionData?.node?.images?.edges[0].node.src} alt="" />
            </div>
            <div className="productInformation">
                <p className="teal uppercase">
                    Blubolt
                </p>
                <p className="product-title largeFont">
                    {props.collectionData?.node?.title}
                </p>
                <p className="teal largeFont">
                    {`£${Number(props.collectionData?.node?.variants?.edges[0].node.price.amount).toFixed(2)}`}
                </p>
            </div>
            <div className="callsToAction">
                <button className="uppercase callTo">
                    Buy
                </button>
                <button className="uppercase callTo">
                    More
                </button>
            </div>
        </section>
    )
}






export default Product