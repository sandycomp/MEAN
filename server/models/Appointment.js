const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Appointment
let Appointment = new Schema({
  doctorInfo: {
    type: String
  },
  appointmentDate: {
    type: Date
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  street1: {
    type: String
  },
  street2: {
    type: String
  },
  landmark: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  pinCode: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  problemDescription: {
    type: String
  },
  inssuranceDetails: {
    type: String
  },
},{
    collection: 'Appointment'
});

module.exports = mongoose.model('Appointment', Appointment);