import { Express } from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

app.get("/login", (req, res) => {
  res.send("Hello Login!");
});

app.post("/signup", (req, res) => {
  res.send("Hello Signup!");
});

app.post("/addNote", (req, res) => {
  res.send("Hello Add Note!");
});

app.get("/notes", (req, res) => {
  res.send("Hello Notes!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
