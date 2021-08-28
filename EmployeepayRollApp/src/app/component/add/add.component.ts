import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public employeeFormGroup: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    profilePic: new FormControl(''),
    gender: new FormControl(''), 
    
  });
  
  constructor(private httpService: HttpService,
    private router: Router) { }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }


  ngOnInit(): void {
  }

    // submit():void{
    //   console.log(this.employee);
    //   this.httpService.post()
    // }
    submit() {
      this.httpService.postemployeeData(this.employee).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl("/home");
      });
    }
}
