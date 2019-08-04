import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import Appointment from '../models/appointment';

@Component({
  selector: 'app-appointment-get',
  templateUrl: './appointment-get.component.html',
  styleUrls: ['./appointment-get.component.css']
})
export class AppointmentGetComponent implements OnInit {

  appoinaments: Appointment[];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService
      .getAppointments()
      .subscribe((data: Appointment[]) => {
        this.appoinaments = data;
    });
  }

  deleteAppointment(id) {
    this.appointmentService.deleteAppointment(id).subscribe(res => {
      this.appoinaments.splice(id, 1);
    });
}

}
