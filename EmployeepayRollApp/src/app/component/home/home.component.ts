import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  template:'<app-add>[employeeData]="employee"><.app-add>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employeeCount: number = 10;
  public employeeDetails: Employee[] = [];
  private employee: Employee | undefined;

  constructor(private httpService: HttpService,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeDetails = response;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }
  remove(id: number): void {
    this.httpService.deleteEmployeeData(id).subscribe(response => console.log(response));  //{
      this.ngOnInit();
      // this.ngOnInit();
    //})
  }
  update(employee: Employee): void{
    //this.employee = employee;
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add/'+ employee.id);

    
  }
}
