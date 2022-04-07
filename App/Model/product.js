const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const productPostSchema = new mongoose.Schema({
    idAccount: {
        type : ObjectId
    },
    idPoi : {
        type : ObjectId
    },
    nameId : {
        type : String
    },
    locationName : {
        type : String
    },
    vinId : {
        type : String
    },
    body : {
        type : Object
    },
    status : {
        type : Number
    },
    response:{
        type : Object
    },
    createDate : {
        type : Date
    },
    deletePostDate : {
        type : Date
    },
    sendDate : {
        type : Date
    },
    postObj : {
        type : Object
    },
    deleteStatus : {
        type : Number
    }
});

const productPostInfo = mongoose.model('productposts',productPostSchema);

module.exports = productPostInfo;