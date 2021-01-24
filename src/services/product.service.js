const ProductRepository = require('../repository/product.repository');

class ProductService {
    static async getAll(){
        return await ProductRepository.getAll();
    }

    static async search(id){
        return await ProductRepository.search(id);
    }

    static async create(product){
        return await ProductRepository.create(product);
    }

    static async updated(product){
        return await ProductRepository.updated(product);
    }

    static async delete(id){
        return await ProductRepository.delete(id);
    }
}

module.exports = ProductService;