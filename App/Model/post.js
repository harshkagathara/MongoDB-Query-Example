const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const postSchema = new mongoose.Schema({
    idAccount: {
        type : ObjectId
    },
    body:{
        type : Object
    },
    poiArray : {
        type : Array,
        idPoi : {
            type : ObjectId
        },
        locationName : {
            type : String
        },
        scheduleTimestamp : {
            type : String
        },
        scheduleDate : {
            type : Date
        },
        deletePostDate : {
            type : Date
        },
        response:{
            type : Object
        },
        sendDate : {
            type : Date
        },
        status : {
            type : Number
        },
        postObj : {
            type : Object
        }
    },
    idSource : {
        type : Number
    },
    postType : {
        type : String
    },
    eventLabel : {
        type : String
    },
    createDate : {
        type : Date
    },
    createdBy : {
        type : ObjectId
    },
    cronStatus : {
        type : Number
    },
    mass_posting : {
        type : Array,
        status : Number,
        id_mass_post_details : ObjectId
    }
});

const postInfo = mongoose.model('posts',postSchema);

module.exports = postInfo;