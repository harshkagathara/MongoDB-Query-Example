const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    accountName: {
        type : String
    },
    api: {
        type:Array,
        source : { 
            id :  { type : Number },
            name :   { type : String },
            refresh_token :   { type : String },
            access_token :   { type : String },
            fbPageId : {type : String},
            group : {
                type : Array,
                id : { type : String },
                name : { type : String },
                "type" : { type : String},
                groupId : {type : String},
                status : { type : String},
            }
        },
        accountId : { type : String},
        lastSyncDate:{ type : Date },
    },
    accountStatus : { type : String},
    createdDate: { type : Date },
});

const accountInfo = mongoose.model('account',accountSchema);

module.exports = accountInfo;