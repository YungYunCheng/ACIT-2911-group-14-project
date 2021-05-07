var CardController = require('./Controllers/CardController');

// Routes
module.exports = function(app){  

    app.get('/',      CardController.Index);
    
    app.get('/Card/Index',      CardController.Index);
    app.post('/Card/CreateCard', CardController.Create);
    app.get('/Card/Create', CardController.CreateCard);
    app.get('/Card/Detail', CardController.Detail);
};
