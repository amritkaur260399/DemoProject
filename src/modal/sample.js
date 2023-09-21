const mongoose=require("mongoose")

const sampleSchema=new mongoose.Schema({
    
end_year:{
    type:String,
    // required:true,
    trim:true,


},

intensity:{
    type:Number,
    // required:true,
    trim:true,


},

sector:{
    type:String,
    // required:true,
    trim:true,


},

topic:{
    type:String,
    // required:true,
    trim:true,


},

insight:{
    type:String,
    // required:true,
    trim:true,


},

url:{
    type:String,
    // required:true,
    trim:true,


},

region:{
    type:String,
    // required:true,
    trim:true,


},

start_year:{
    type:String,
    // required:true,
    trim:true,


},

impact:{
    type:String,
    // required:true,
    trim:true,


},

added:{
    type:String,
    // required:true,
    trim:true,


},

published:{
    type:String,
    // required:true,
    trim:true,


},

country:{
    type:String,
    // required:true,
    trim:true,


},

relevance:{
    type:String,
    // required:true,
    trim:true,


},

pestle:{
    type:String,
    // required:true,
    trim:true,


},

source:{
    type:String,
    // required:true,
    trim:true,


},

title:{
    type:String,
    // required:true,
    trim:true,


},

likelihood:{
    type:Number,
    // required:true,
    trim:true,


},

    
  
  
},
    {timestamps:true},
);

module.exports=mongoose.model("sample",sampleSchema);

//model is a rapper around a schema it provide interface in database to perfornm crud operations
//module is a set of functions 
//authenication  it will check our crendials login or password status code 401
//authorization valid author id status code 403 checks author is valid or not