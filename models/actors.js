const {Schema} = require('mongoose') 

const actorSchema = new Schema (
    {
        name: {type: String, required: true},
        age:{type: Number, required: true},
        living: {type: Boolean, required: true},
        starring_in: {type: Schema.Types.ObjectId, ref: 'Movies'}
       

    },
    {timestamps: true}


)

module.exports = actorSchema