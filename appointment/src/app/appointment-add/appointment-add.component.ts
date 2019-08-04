import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { AppointmentService } from '../service/appointment.service';

@NgModule({
  imports: [
    MatFormFieldModule
  ]
  // providers: [FormBuilder]
})

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {
  doctors: any = ['Doctor1', 'Doctor2', 'Doctor3']; // need to load on login(user type) or location
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.createForm();
  }

  createForm() {
    this.appointmentForm = this.fb.group({
      doctorInfo: ['', Validators.required ],
      appointmentDate: ['', Validators.required ],
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      street1: ['', Validators.required ],
      street2: ['', Validators.required ],
      landmark: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ],
      pinCode: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      email: ['', Validators.required ],
      problemDescription: ['', Validators.required ],
      inssuranceDetails: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  // createAppointment(DoctorInfo, appointmentDate, firstName, lastName, street1, street2,
  //   landmark, city, state, pinCode, phoneNumber, email, problemDescription, inssuranceDetails) {
  //   console.log('data');
  // }

  createAppointment() {
    console.log(this.appointmentForm);
    console.log(this.appointmentForm.value);
    this.appointmentService.createAppointment(this.appointmentForm.value);
  }

}
