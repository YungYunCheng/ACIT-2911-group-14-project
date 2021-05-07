// Placeholder "Database"
let database = [{title: "Test Card", context: "This is just a test", id: 1}]

let Index = (req, res) => {
    res.render("Card/Index", {cards: database})
}

let CreateCard = (req, res) => {
    res.render("Card/Create", {cards: database})
}

let Create = (req, res) => {
    let flashcard = {
        title: req.body.title,
        context: req.body.context,
        id: database.length + 1
    };
    database.push(flashcard)
    res.redirect("/Card/Index")
}

let Detail = (req, res) => {
    let cardTitle = req.query.title;

    let cardInfo = "placeholder"

    for (i in database){
        if (database[i].title = cardTitle){
            cardInfo = database[i]
        }
    }

    res.render('Card/Detail', {cards:cardInfo})
}
module.exports = {database, Index, CreateCard, Create, Detail}