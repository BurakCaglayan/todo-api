import { TodoModel } from "../db/models/todo";

let todos = [
  {
    id: 1,
    title: "First Todo",
    description: "First Description",
    status: "COMPLETED",
  },
];

class _TodoController {
  list(req, res) {
    return TodoModel.find().then((result) => res.json(result));
  }

  get(req, res) {
    return TodoModel.findById(req.params.id).then((result) => res.json(result));
  }

  create(req, res) {
    return TodoModel.create(req.body).then((result) => res.json(result));
  }

  update(req, res) {
    return TodoModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((result) =>
      res.json(result)
    );
  }

  delete(req, res) {
    return TodoModel.findByIdAndDelete(req.params.id).then(() => res.status(204).end());
  }
}

export const TodoController = new _TodoController();
