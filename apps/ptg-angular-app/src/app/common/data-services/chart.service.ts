import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class chartService {
  apiURL = 'http://ptguistrapi.azurewebsites.net/api/';

  constructor(private http: HttpClient) {}

  getD3BarList() {
    return this.http.get<any>(`${this.apiURL}d3-bar-lists`);
  }

  getD3PieList() {
    return this.http.get<any>(`${this.apiURL}d3-pie-lists`);
  }
  getD3LineChart() {
    return this.http.get<any>(`${this.apiURL}d3-line-lists`);
  }

  getLineBarChart() {
    return this.http.get<any>(`${this.apiURL}line-bar-lists`);
  }

  getLineChart2D() {
    return this.http.get<any>(`${this.apiURL}line-chart-2ds`);
  }
  getBarChart3D() {
    return this.http.get<any>(`${this.apiURL}bar-chart-3ds`);
  }
  getStackedColumnData() {
    return this.http.get<any>(`${this.apiURL}stacked-column-lists`);
  }

  getMultiLineChart2D() {
    return this.http.get<any>(`${this.apiURL}multi-line-chart-2ds`);
  }

  getPieChart3D() {
    return this.http.get<any>(`${this.apiURL}pie-chart-3ds`);
  }
}
