import BaseController from "../utils/BaseController"
import { moonsService } from "../services/MoonsService"
export class MoonsController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .get("/:moonId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await moonsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await moonsService.findById(req.params.moonId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await moonsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await moonsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await moonsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}