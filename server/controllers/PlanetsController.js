import BaseController from "../utils/BaseController"
import { planetsService } from "../services/PlanetsService"
import { moonsService } from "../services/MoonsService";
export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .get("/:planetId", this.getOne)
      .get("/:planetId/moons", this.getMoonsByPlanetId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
 async getMoonsByPlanetId(req, res, next) {
    try {
      res.send(await moonsService.getMoonsByPlanetId(req.params.subjectId))
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await planetsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await planetsService.findById(req.params.planetId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await planetsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await planetsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await planetsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}