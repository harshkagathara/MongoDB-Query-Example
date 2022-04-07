const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const poiSchema = new mongoose.Schema({
    idAccount: {
        type : ObjectId
    },
    storeCode : {
        type : String
    },
    locationName : {
        type : String
    },
    nameId : {
        type : String
    }, 
    telephone : {
        type : String
    },
    idGroupInfo : {
        id : String,
        name : String,
    },
    placeId : {
        idPlace : String,
        idSource : Number,
    },
    locality:{type : String},
    mapUrl : {
        type : String
    },
    newReviewUrl : {
        type : String
    },
    latlng:{
        latitude : Number,
        longitude : Number         
    },
    address:{
            postalCode : String,
            administrativeArea : String,
            addressLines : String,
            regionCode : String,
            languageCode : String,
    },
    logo : {
        type : Object
    },
    mediaImages : {
        type : Object
    },
    categories : {
        type : Object
    },
    additionalCategories : {
        type : Object
    },
    website : {
        type : String 
    },
    attributes : {
       type : Object 
    },
    description : {
        type : String
    },
    hours : {
        type : Object
    },
    status : { 
        type : String
    },
    updateLocationResponse : { 
        type : Object
    },
});

const poiInfo = mongoose.model('pois',poiSchema);

module.exports = poiInfo;