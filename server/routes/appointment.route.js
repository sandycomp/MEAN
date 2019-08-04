const express = require('express');
const app = express();
const appointmentRoutes = express.Router();

// Require Appointment model in our routes module
let Appointment = require('../models/Appointment');

// Defined store route
appointmentRoutes.route('/add').post(function (req, res) {
  let appointment = new Appointment(req.body);
  appointment.save()
    .then(appointment => {
      res.status(200).json({'Appointment': 'Appointment has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
appointmentRoutes.route('/').get(function (req, res) {
  Appointment.find(function (err, appointments){
    if(err){
      console.log(err);
    }
    else {
      console.log("appointmentRoutes.route('/').get");
      res.json(appointments);
    }
  });
});

// Defined edit route
appointmentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Appointment.findById(id, function (err, appointment){
      res.json(appointment);
  });
});

//  Defined update route
appointmentRoutes.route('/update/:id').post(function (req, res) {
  Appointment.findById(req.params.id, function(err, appointment) {
    if (!appointment)
      res.status(404).send("Record not found");
    else {
      appointment.AppointmentName = req.body.AppointmentName;
      appointment.AppointmentDescription = req.body.AppointmentDescription;
      appointment.AppointmentPrice = req.body.AppointmentPrice;

      appointment.save().then(appointment => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
appointmentRoutes.route('/delete/:id').get(function (req, res) {
    Appointment.findByIdAndRemove({_id: req.params.id}, function(err, appointment){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = appointmentRoutes;