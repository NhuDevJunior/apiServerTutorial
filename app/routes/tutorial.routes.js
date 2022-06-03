module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/findall/published", tutorials.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/findone/:id", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/update/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/deleteid/:id", tutorials.delete);
    // Delete all Tutorials
    router.delete("/deleteall/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
  };