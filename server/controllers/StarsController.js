import BaseController from "../utils/BaseController"
import { starsService } from "../services/StarsService"
import { starPlanetsService } from "../services/StarPlanetsService";

export class StarsController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .get("/:starId", this.getOne)
      .get("/:starId/planets", this.getPlanetsByStarId)
      .post("", this.create)
      .post("/:starId/planets/:planetId", this.invite)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getPlanetsByStarId(req, res, next) {
    res.send(await starPlanetsService.findPlanets(req.params.starId))
  }
  async invite(req, res, next) {
    let invitation = {
      star: req.params.starId,
      planet: req.params.planetId
    }
    res.send(await starPlanetsService.invite(invitation))
  }
  async getAll(req, res, next) {
    try {
      res.send(await starsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await starsService.findById(req.params.starId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await starsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await starsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await starsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}