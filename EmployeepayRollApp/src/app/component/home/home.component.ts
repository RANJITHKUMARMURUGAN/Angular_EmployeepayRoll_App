import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  template: '<app-add>[employeeData]="employee"><.app-add>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public employeeCount: number = 10;
  public employeeDetails: Employee[] = [];
  private employee: Employee | undefined;

  constructor(private httpService: HttpService,
    private router: Router,
    private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeDetails = response.data;
      console.log(response);
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
      console.log(this.employeeCount);
    });
  }

  remove(id: number) {
    this.httpService.deleteEmployeeData(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add/' + employee.id);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
