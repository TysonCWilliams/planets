import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class GalaxiesService {
  async delete(galaxyId) {
    let exists = await this.findById(galaxyId)
    if (!exists) {
      throw new BadRequest("This is not the galaxy you are looking for.")
    }
    await dbContext.Galaxies.findByIdAndDelete(galaxyId)
    return "succesfully deleted"
  }
  async edit(galaxyId, body) {
    let exists = await this.findById(galaxyId)
    if (!exists) {
      throw new BadRequest("This is not the galaxy you are looking for.")
    }
    return await dbContext.Galaxies.findByIdAndUpdate(galaxyId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Galaxies.find(query).populate("planet")
  }
  async create(body) {
    return await dbContext.Galaxies.create(body)
  }

  async findById(id) {
    return await dbContext.Galaxies.findById(id).populate("planet")
  }

}
export const galaxiesService = new GalaxiesService();