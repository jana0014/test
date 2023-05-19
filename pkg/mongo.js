
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
  }
});

const Faculty = mongoose.model('Faculty', facultySchema);


const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  faculties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  }]
});

const University = mongoose.model('University', universitySchema);

const createFaculty = async (name, address, universityId) => {
    const faculty = new Faculty({name, address, universityId})
    return await faculty.save();
};

const removeFaculty = async (id) => {
    return await Faculty.deleteOne({ _id: id });
};
  

const updateFaculty = async (id, faculty) => {
    return await Faculty.updateOne({ _id: id, faculty });
};
  

const getAllFaculties = async () => {
    return await Faculty.find({});
};
  

const getOneFaculty = async (id) => {
    return await Faculty.findOne({ _id: id });
};

module.exports = {
    createFaculty,
    removeFaculty,
    updateFaculty,
    getAllFaculties,
    getOneFaculty,

}