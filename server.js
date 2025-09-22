const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json({ message: "Item criado com sucesso!", item });
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < items.length) {
    res.json(items[id]);
  } else {
    res.status(404).json({ message: "Item não encontrado!" });
  }
});

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < items.length) {
    items[id] = req.body;
    res.json({ message: "Item atualizado com sucesso!", item: items[id] });
  } else {
    res.status(404).json({ message: "Item não encontrado!" });
  }
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < items.length) {
    const deleted = items.splice(id, 1);
    res.json({ message: "Item deletado com sucesso!", deleted });
  } else {
    res.status(404).json({ message: "Item não encontrado!" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
