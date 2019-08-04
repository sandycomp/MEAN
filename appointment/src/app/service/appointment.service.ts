import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  uri = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) { }

  createAppointment(appointment) {
    console.log('inside service ');
    console.log(appointment);
    this.http.post(`${this.uri}/add`, appointment)
        .subscribe(res => console.log('Done'));
  }

  getAppointments() {
    return this
           .http
           .get(`${this.uri}`);
  }

  deleteAppointment(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

}
