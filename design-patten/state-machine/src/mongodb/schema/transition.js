const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const TransitionSchema = new Schema({
    name: String,
    from: String,
    to: String,
    meta: {
        created_at: {
            type: Date,
            default: Date.now()
        },
        updated_at: {
            type: Date,
            default: Date.now()
        }
    }
})

TransitionSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.created_at = this.meta.created_at = Date.now()
    } else {
        this.meta.updated_at = Date.now()
    }

    next()
})

mongoose.model('Transition', TransitionSchema)
