const express = require("express");
const path = require("path");
const flashcardsController = require("./controllers/flashcard_app_controller");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/flashcards", flashcardsController.listCards);
app.get("/flashcards/add", flashcardsController.addCard);

app.listen(5000, () => {
    console.log("Server is now running. To visit: localhost:5000");
});
