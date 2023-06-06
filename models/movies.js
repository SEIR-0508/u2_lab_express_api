const { Schema } = require('mongoose')

const Movies = new Schema(
    {
        title:{type:String, required:true},
        runtime:{type:Number, required:true},
        rating:{type:Number, required:true},
        yearReleased: {type:Number, required:true},
        actors: {type:Schema.Types.ObjectId, ref: 'actors_id'},
        description: {type:String, required:true}
    },
    {timestamps:true}
)

module.exports = Movies