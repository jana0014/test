const { getAllFaculties, getOneFaculty, createFaculty, updateFaculty, removeFaculty } = require("../pkg/mongo");

const getAll = async (req, res) => {
    try {
      const cars = await getAllFaculties();
      return res.status(200).send(cars);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  

  const getOne = async (req, res) => {
    try {
      const car = await getOneFaculty(req.params.id);
      return res.status(200).send(car);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const create = async (req, res) => {
    try {
      await createFaculty(req.body);
      return res.status(201).send(req.body); 
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const update = async (req, res) => {
    try {
      await updateFaculty(req.params.id, req.body);
      return res.status(204).send(""); 
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };

  
  const remove = async (req, res) => {
    try {
      await removeFaculty(req.params.id);
      return res.status(204).send("");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };

  module.exports = {
    getAll,
    getOne,
    update,
    remove,
    create
  }