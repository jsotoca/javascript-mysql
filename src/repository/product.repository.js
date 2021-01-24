const MySQL = require('../config/database');
const Product = require('../models/product.model');


class ProductRepository {
    static getAll(){
        return new Promise((resolve,reject)=> {
            MySQL.doQuery(`SELECT * FROM products ORDER BY id DESC`,null)
            .then(results => {
                let products = results.map(product => 
                    new Product(
                     product.id,   
                     product.name,   
                     product.price,   
                     product.created_at,   
                     product.updated_at,   
                    )
                );
                resolve(products);
            })
            .catch(err => reject(err));
        });
    }

    static search(id){
        return new Promise((resolve,reject) => {
            MySQL.doQuery(
                `
                    SELECT * FROM products WHERE id = ?
                `,
                [
                    id
                ]
            )
            .then(result => resolve(result))
            .catch(err => reject(err));
        }); 
    }

    static create(product){
        return new Promise((resolve,reject) => {
            MySQL.doQuery(
                `
                    INSERT INTO products(name,price,created_at,updated_at)
                    VALUES (?,?,?,?)
                `,
                [
                    product.name,
                    product.price,
                    product.created_at,
                    product.updated_at,
                ]
            )
            .then(result => resolve(result.insertId))
            .catch(err => reject(err));
        }); 
    }

    static updated(product){
        return new Promise((resolve,reject) => {
            MySQL.doQuery(
                `
                    UPDATE products SET name = ?, price = ?, updated_at = ?
                    WHERE id = ?
                `,
                [
                    product.name,
                    product.price,
                    product.updated_at,
                    product.id,
                ]
            )
            .then(result => resolve(result))
            .catch(err => reject(err));
        }); 
    }

    static delete(id){
        return new Promise((resolve,reject) => {
            MySQL.doQuery(
                `
                    DELETE FROM products WHERE id = ?
                `,
                [
                    id
                ]
            )
            .then(result => resolve(result))
            .catch(err => reject(err));
        }); 
    }
}

module.exports = ProductRepository;