import BaseController from "../utils/BaseController"
import { galaxiesService } from "../services/GalaxiesService"
export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:galaxyId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxiesService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await galaxiesService.findById(req.params.galaxyId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await galaxiesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await galaxiesService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await galaxiesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
