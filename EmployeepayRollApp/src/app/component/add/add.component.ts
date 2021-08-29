import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public employee: Employee = new Employee;
  public employeeFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    ) {
    this.employeeFormGroup = this.formBuilder.group({
      name: new FormControl(''),
      profilePic: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      salary: new FormControl(''),
      date: new FormControl(''),
      note: new FormControl('') 
    })
   }

  ngOnInit(): void {
    console.log(this.employeeFormGroup);
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
    
     salary: number = 400000;
    updateSetting(event: any) {
    this.salary = event.value;
  }

  onSubmit(): void{
    this.employee = this.employeeFormGroup.value;
    this.httpService.addEmployeeData(this.employee).subscribe(response=>{
      console.log(response);
    })
  }
}

