import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {


  medicine: Medicine = new Medicine();

  constructor(private medicineService: MedicineService, private router: Router) { }

  saveMedicine() {
    console.log(this.medicine);
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicine();

    })

  }
  onSubmit() {
    this.saveMedicine();
  }
  goToMedicine() {
    this.router.navigate(['/medicine']);
  }


}