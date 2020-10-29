import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class StarsService {
  async delete(starId) {
    let exists = await this.findById(starId)
    if (!exists) {
      throw new BadRequest("This is not the star you are looking for.")
    }
    await dbContext.Stars.findByIdAndDelete(starId)
    return "succesfully deleted"
  }
  async edit(starId, body) {
    let exists = await this.findById(starId)
    if (!exists) {
      throw new BadRequest("This is not the star you are looking for.")
    }
    return await dbContext.Stars.findByIdAndUpdate(starId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Stars.find(query)
  }
  async create(body) {
    return await dbContext.Stars.create(body)
  }

  async findById(id) {
    return await dbContext.Stars.findById(id)
  }

}
export const starsService = new StarsService();