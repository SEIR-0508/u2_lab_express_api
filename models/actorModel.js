const actorSchema = new Schema(
    {
        name:  { type: String, required: true },
        age:   { type: Number, required: true }, 
        alive: { type: Boolean, required: true }
    },
    { timestamps: true }
)