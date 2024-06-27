const db = require('../config/db');

class product{
    static async getProduct(req,res){
        try{
            let sql = 'select * from productdetails';
            db.query(sql, (err,result)=>{
                console.log(result)
                res.send({status: true, data: result});
            })         
        }
        catch(err){
            console.log(err);
            res.send({status: false, data: err});
        }
    }

    static async addProduct(req,res){
        try{
            const {product_name,price,brand,description,rating,Category} = req.body;

            let sql = `insert into productdetails(product_name,price,brand,description,rating,Category) values('${product_name}', ${price}, '${brand}', '${description}', ${rating}, '${Category}');`
            db.query(sql, (err,result)=>{
                console.log(result)
                res.send({status: true, data: result});
            }) 
        }
        catch(err){
            console.log(err);
            res.send({status: false, data: err});
        }

    }



}

module.exports = product;