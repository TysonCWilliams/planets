import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class MoonsService {
  async getMoonsByPlanetId(planetId) {
    return await dbContext.Moons.find({planet:planetId}).populate("planet")
  }
  async delete(moonId) {
    let exists = await this.findById(moonId)
    if (!exists) {
      throw new BadRequest("This is not the moon you are looking for.")
    }
    await dbContext.Moons.findByIdAndDelete(moonId)
    return "succesfully deleted"
  }
  async edit(moonId, body) {
    let exists = await this.findById(moonId)
    if (!exists) {
      throw new BadRequest("This is not the moon you are looking for.")
    }
    return await dbContext.Moons.findByIdAndUpdate(moonId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Moons.find(query).populate("planet")
  }
  async create(body) {
    return await dbContext.Moons.create(body)
  }

  async findById(id) {
    return await dbContext.Moons.findById(id)
  }

}
export const moonsService = new MoonsService();