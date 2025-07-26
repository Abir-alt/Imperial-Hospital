import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit  {

  patients: Patient[] = [];
   patient: any;

  constructor( private patientService:PatientService, private router:Router, private docauth:DocauthService ) { }

  ngOnInit(): void {
     this.getPatients();
  }


  getPatients() {
    this.patientService.getAllPatients().subscribe((data: Patient[])=>{
      this.patients = data;
      // console.log(this.patients);
    })
  }

  update(id: number) {
    this.router.navigate(['update-patient', id ]);
  }


  delete(id: number) {
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    });
  }

    view(id: number) {
    this.router.navigate(['view-patient', id ]);
    }

  logout() {
    this.docauth.logout();
    this.router.navigate(['home']);
  }


}
