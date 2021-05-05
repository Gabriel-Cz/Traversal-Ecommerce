const stripeModel = (products) => {
    products.map(product => {
        product.currency = "usd"
        product.amount = product.price.replace('$', '').replace('.', '')
        product.images = [product.image]
        delete product.image
        delete product.title
        delete product.description
        delete product.element
        delete product.sku
        delete product.id
        delete product.formattedValue
        delete product.value
        delete product.rating
        delete product.state
        delete product.categorie
        delete product.price
    })
    return products;
}

export default stripeModel;