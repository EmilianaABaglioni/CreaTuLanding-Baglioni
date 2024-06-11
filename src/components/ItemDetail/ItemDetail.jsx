const ItemDetail = ({ item }) => {
    const { name, description, image, price } = item

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