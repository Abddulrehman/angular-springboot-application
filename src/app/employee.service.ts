import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmployeeModel } from './EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8091/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}`);
  }

  createEmployee(employee: EmployeeModel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<EmployeeModel>{
    return this.httpClient.get<EmployeeModel>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: EmployeeModel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}