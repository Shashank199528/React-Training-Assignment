// define actions
export function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        product
    }
}

export function loadProduct(products){
    return {
        type: "LOAD_PRODUCTS",
        products
    }
}