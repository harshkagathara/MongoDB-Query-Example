const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    idAccount: {
        type : ObjectId
    },
    idPoi: {
        type : ObjectId
    },
    reviewer : {
       type : Object 
    },
    reviewId:{
        type : String
    },
    reviewCreatedDate:{
        type : Date
    }, 
    rating :{
        type : Number
    },
    comment:{
        type : String
    },
    comment_en:{
        type : String
    },
    globalScore :{
        type : Number
    },
    globalMagnitude :{
        type : Number
    },
    entity: {
        type : Array,
        label : {type :String},
        type: {type :String},
        score:{type :Number},
        magnitude:{type :Number},
        tags:{
            type :Array,
            tagName : {
                type : String
            },
            tagCreateDate : {
                type : Date
            }
        },

    },
    replyObj : {
        type : Object,
        replyComment : {
            type : String
        },
        createdDate : {
            type : String
        }
    },
    isProcessed:{
        type : Number
    },
    isDeleted :{
        type : Number
    }
});

const reviewInfo = mongoose.model('review',reviewSchema);

module.exports = reviewInfo;