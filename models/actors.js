const { Schema } = require('mongoose')

const Actors = new Schema(
    {
        name: {type:String, required:true},
        age: {type:Number, required:true},
        alive: {type:Boolean, required:true},
        cool: {type:Boolean, required:true}
    },
    {timestamps: true}
)

module.exports= Actors