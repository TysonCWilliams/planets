import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const StarPlanet = new Schema(
  {
   
    planet: { type: ObjectId, ref: "Planet"},
    star: { type: ObjectId, ref: "Star"}

  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default StarPlanet