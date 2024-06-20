import React from "react"

const ItemDetail = ({ name, description, image, price }) => {
    return (
        <>
            <div>
            <img src={image} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </>
    )
}

export default ItemDetail