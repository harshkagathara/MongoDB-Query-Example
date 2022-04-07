const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const usersSchema = new mongoose.Schema({
    idAccount : {
        type : String,
    },
    admin : {
        type : Number
    },
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : Object
    },
    lastLoginDate : {
        type : Date
    },
    lastOutDate : {
        type : Date
    },
    logo : {
        type : String
    },
    createdBy : {
        type : ObjectId
    },
    jwtTokenId : {
        type : ObjectId
    },
    createdOn : {
        type : Date
    },
    segment : {
        type : Array
    },
    activeStatus : {
        type : Number
    },
    accountActivated : {
        type : String
    },
    subscription :
    {
        type : String
    },
    slectedPois :
    {
        type : Array
    },
    selectedGroups : 
    {
        type : Array
    },
    deleteStatus : 
    {
        type : String
    },
    selectedUser: {
        type : Array ,
        userId :  { type : ObjectId },
        idAccount :  { type : ObjectId },
    }
})
const usersInfo = mongoose.model('users',usersSchema);

module.exports = usersInfo;
