import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private httpClient:HttpClient ) { }

    private baseUrl = environment.apiUrl+"/api/v1/patient"

    getAllPatients():Observable<Patient[]> {
      return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
    } 

    delete(id: number):Observable<object> {
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

    createPatient(patient: Patient):Observable<Patient> {
      return this.httpClient.post<Patient>(`${this.baseUrl}`, patient);
    }

    getPatientById(id: number):Observable<Patient> {
      return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
    }

    updatePatient(id: number, patient: Patient):Observable<Patient> {
      return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`, patient);
    }

}
