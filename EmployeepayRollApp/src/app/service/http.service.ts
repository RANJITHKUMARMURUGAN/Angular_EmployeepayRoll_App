import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8080/api/employees/"

  constructor(private httpClient: HttpClient){}

  getEmployeeData(): Observable<any>{
    return this.httpClient.get(this.baseUrl + "getAllEmployee")
  }

  addEmployeeData(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"addEmployee", data);
  }

  updateEmployeeData(id: number, data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "updateEmployee/"+id, data);
  }

  deleteEmployeeData(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "deleteEmployee/"  +id); 
  }
  
}
