web tutorial: https://www.bezkoder.com/node-js-express-login-mongodb/
mongo crud operation : https://www.js-tutorials.com/nodejs-tutorial/crud-operations-using-nodejs-express-mongodb-mongoose/


Hello I'm Allence Vakharia (LazyDeveloper)
This is my first app with Nodejs & express , api .

Follow this steps as a broilerplate of nodejs api:

---For Setup server & mongodb locally---

1) Setup express web server : (server.js)
2) Configure mogodb databse :(app/config/db.config.js)
3) Define Mongoose Model :(app/models/modeName.model.js)
4) Initialize Mongoose :(app/models/index.js)

---For Auth with JWT---

1) Configure Auth Key (app/config/auth.config.js)
2) Create Middleware functions (app/middlewares)

***********
- Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.
***********

3) Verify JWT Token is valid or not (app/middlewares/authJwt.js) (continue from here)
4) Make Auth controllers (Your Logic) (app/controllers/auth.controller)

---Creating Routes--- (app/routes)
To make our route working we need to pass "end_point" and our controller(main logic);
We can use middlewares in "[]" in our post method

IMP : Add this route to server.js

1) Add headers 
2) Make POST , GET , PUT , DELETE routes
3) All Logic of api end point is in our controller.
4) To use Validation in api we use middlewares that excecutes before controller.