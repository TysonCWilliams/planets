import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    planet: { type: ObjectId, ref: "Planet", required: true}
  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default Moon