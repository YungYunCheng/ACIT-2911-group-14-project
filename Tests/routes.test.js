const app = require('../app')
const supertest = require('supertest');
const CardController = require("../Controllers/CardController")
const { it } = require('@jest/globals');

const fakeCard = {
    title: "test card",
    context: "This is a test"
}

it("Tests '/' to see if we get a response.", async() => {
    await supertest(app)
        .get("/")
        .expect(200);
})

it("Tests '/Cards/Index' to see if we get a response.", async() => {
    await supertest(app)
        .get("/Card/Index")
        .expect(200);
})

it("Creates a flashcard, checks database to see if it exists.", async() => {
    await supertest(app)
        .post("/Card/CreateCard")
        .send(fakeCard)

    expect(CardController.database.length).toBe(2)
})

it("Edits a flashcard, checks database to see if it exists.", async() => {
    await supertest(app)
        .post("/Card/Edit?title=Test%20Card")
        .send(fakeCard)
    
    expect(CardController.database[1]).toBe(fakeCard)
})

it("Deletes a flashcard, checks database to see if it exists.", async() => {
    await supertest(app)
        .delete("Card/Delete")
    
    expect(CardController.database.length).toBe(0)
})