const ProductService = require('../services/product.service');
const Product = require('../models/product.model');

const getAll = async (req,res) => {
    try {
        let data = await ProductService.getAll();
        res.status(200);
        return res.json({
            data
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
};

const search = async(req,res) => {
    const { id } = req.params;
    try {
        let product = await ProductService.search(id);
        if (product.length){
            res.status(201);
            return res.json({
                product: product[0]
            });
        }
        else {
            res.status(404);
            return res.json({
                mensaje: 'Producto no encontrado.'
            });
        }
            
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
};

const create = async(req,res) => {
    const { body } = req;
    const now = new Date();
    try {
        let id = await ProductService.create( new Product(
            null,body.name,body.price,now,now
        ));
        res.status(201);
        return res.json({
            message: `producto ${id} creado exitosamente.`
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
};

const updated = async(req,res) => {
    const { body } = req;
    const now = new Date();
    try {
        let result = await ProductService.updated( new Product(
            body.id,body.name,body.price,null,now
        ));
        let message = `Producto${result.affectedRows?'':' no'} actualizado exitosamente.`;
        res.status(201);
        return res.json({
            message
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
};

const remove = async(req,res) => {
    const { id } = req.params;
    try {
        let result = await ProductService.delete(id);
        let mensaje = '';
        if (result.affectedRows)
            mensaje = `Se elimino el producto con id ${id}`;
        else
            mensaje = `No se encontro producto con id ${id}`;
        res.status(201);
        return res.json({
            mensaje
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
};

module.exports = {
    getAll,
    search,
    create,
    updated,
    remove
}