import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    galaxy: { type: ObjectId, ref: "Galaxy" }

  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default Planet