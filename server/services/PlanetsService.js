import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class PlanetsService {
  async delete(planetId) {
    let exists = await this.findById(planetId)
    if (!exists) {
      throw new BadRequest("This is not the planet you are looking for.")
    }
    await dbContext.Planets.findByIdAndDelete(planetId)
    return "succesfully deleted"
  }
  async edit(planetId, body) {
    let exists = await this.findById(planetId)
    if (!exists) {
      throw new BadRequest("This is not the planet you are looking for.")
    }
    return await dbContext.Planets.findByIdAndUpdate(planetId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Planets.find(query).populate("Galaxy")
  }
  async create(body) {
    return await dbContext.Planets.create(body)
  }

  async findById(id) {
    return await dbContext.Planets.findById(id).populate("Galaxy")
  }

}
export const planetsService = new PlanetsService();