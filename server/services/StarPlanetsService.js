import {dbContext} from "../db/DbContext"
class StarPlanetsService{
  async findPlanets(starId) {
     return await dbContext.Invitations.find({star: starId}).populate("planet").populate("star")
   }
   async invite(invitation) {
    return await dbContext.Invitations.create(invitation)
  }


}
export const starPlanetsService = new StarPlanetsService();