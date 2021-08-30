import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public employee: Employee = new Employee;
  public employeeFormGroup: FormGroup;
  //@Input("employeeData") employeeData!: Employee;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute) {
    
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
    if(this.activatedRoute.snapshot.params['id'] != undefined){
      this.dataService.currentEmployee.subscribe(employee=>{
        if(Object.keys(employee).length !==0){
          console.log(employee);
          this.employeeFormGroup.get('name')?.setValue(employee.name);
          this.employeeFormGroup.get('profilePic')?.setValue(employee.profilePic);
          this.employeeFormGroup.get('gender')?.setValue(employee.gender);
          this.employeeFormGroup.get('email')?.setValue(employee.email);
          this.employeeFormGroup.get('salary')?.setValue(employee.salary);
          this.employeeFormGroup.get('date')?.setValue(employee.date);
          this.employeeFormGroup.get('note')?.setValue(employee.note);
        }
      })
    }
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

