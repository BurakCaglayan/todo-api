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
    return res.json(todos);
  }

  get(req, res) {
    return res.json(todos.find((todo) => todo.id == req.params.id));
  }

  create(req, res) {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    const item = { ...req.body, id };
    todos.push(item);
    return res.json(item);
  }

  update(req, res) {
    const index = todos.findIndex((todo) => todo.id == req.params.id);
    if (index === -1) {
      return res.status("404").end();
    }
    todos[index] = { ...todos[index], ...req.body };
    return res.json(todos[index]);
  }

  delete(req, res) {
    todos = todos.filter((todo) => todo.id != req.params.id);
    return res.status("204").end();
  }
}

export const TodoController = new _TodoController();
