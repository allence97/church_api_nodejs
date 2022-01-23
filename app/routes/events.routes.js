// api/events
//GET
//POST
//PUT
 const controller = require('../controllers/events.controller');
module.exports = function (app) {

    app.use(function (req, res , next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    
app.post("/api/events",controller.addEvent);
app.get("/api/events/:id",controller.fetchOne);
// app.put("api/events");
}
