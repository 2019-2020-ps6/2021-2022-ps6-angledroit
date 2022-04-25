

import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { PatientModel } from './patient-data2 board.model';
import{ ApiService } from 'src/app/shared/api.service'




@Component({
  selector: 'app-tabdon',
  templateUrl: './tabdon.component.html',
  styleUrls: ['./tabdon.component.scss']
})
export class TabdonComponent implements OnInit {
  formValue !: FormGroup;
  PatientdataObj : PatientModel = new PatientModel();
  PatientData !: any;

  

  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      PatientfirstName : [''],
      PatientlastName : [''],
      age : [''],
      Familymember: [''],
      Relationship : [''],
      linktoImage : ['']


    })
    this.getAllPatients();

  }
  postPatientData(){
    this.PatientdataObj.firstName = this.formValue.value.firstName;
    this.PatientdataObj.lastName= this.formValue.value.lastName;
    this.PatientdataObj.PatientfirstName= this.formValue.value.PatientfirstName;
    this.PatientdataObj.PatientlastName= this.formValue.value.PatientlastName;
    this.PatientdataObj.age= this.formValue.value.age;
    this.PatientdataObj.Familymember= this.formValue.value.Familymember;
    this.PatientdataObj.RelationShip= this.formValue.value.RelationShip;
    this.PatientdataObj.linktoImage= this.formValue.value.linktoImage;

    this.api.postData(this.PatientdataObj)
    .subscribe(res=>{
      console.log(res);
      alert("patient added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllPatients();


    },
    err=>{
      alert("something went wrong");
    })

  }
  getAllPatients(){
    this.api.getData()
    .subscribe(res=>{
      this.PatientData = res;
    })
  }
  deletePatient(row : any){
    this.api.deleteData(row.id)
    .subscribe(res=>{
      alert("Patient deleted")
      this.getAllPatients();
    })
  }

}

