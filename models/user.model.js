var schema = require("./schema");
var crypto = require("crypto");
const { Promise } = require("mongoose");

exports.save = (data) => {
    return new Promise((resolve, reject) =>{

        new schema.userSchema(data).save((err, response) => {
            if (err) {
                reject(err);
            } else {
                let{password, salt, ...result} = data;
                resolve(data);
            }
        })
    })

    // return new promises
}