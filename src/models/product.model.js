class Product {
    id;
    name;
    price;
    created_at;
    updated_at;

    constructor(id,name,price,created_at,updated_at){
        this.id = id;
        this.name = name;
        this.price = price;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

module.exports = Product;