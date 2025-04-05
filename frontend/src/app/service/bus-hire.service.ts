// frontend/src/app/services/bus-hire.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusHireService {
  private apiUrl = 'http://localhost:3000/api/bus-hire';

  constructor(private http: HttpClient) {}

  createHireRequest(hireData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, hireData);
  }

  getUserHires(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }
}
