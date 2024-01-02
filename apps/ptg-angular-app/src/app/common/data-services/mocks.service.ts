import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class mocksService {
  apiURL = 'http://ptguistrapi.azurewebsites.net/api/';

  constructor(private http: HttpClient) {}

  getCityList() {
    return this.http.get<any>(`${this.apiURL}city-a-lists`, {
});
  }
  getCardList() {
    return this.http.get<any>(`${this.apiURL}card-lists`);
  }
  getLangList() {
    return this.http.get<any>(`${this.apiURL}lang-lists`);
  }
  getCountryList() {
    return this.http.get<any>(`${this.apiURL}country-lists`);
  }
  getGenderList() {
    return this.http.get<any>(`${this.apiURL}gender-lists`);
  }

  getStateList() {
    return this.http.get<any>(`${this.apiURL}state-lists`);
  }
  getSalutationList() {
    return this.http.get<any>(`${this.apiURL}salutation-lists`);
  }
  getTableData() {
    return this.http.get<any>(`${this.apiURL}download-file-lists`);
  }

  getTableList() {
    return this.http.get<any>(`${this.apiURL}table-lists`);
  }

  getAccordianData() {
    return this.http.get<any>(`${this.apiURL}accordian-lists`);
  }

  getTodoList() {
    return this.http.get<any>(`${this.apiURL}todo-a-lists`);
  }

  getDoneList() {
    return this.http.get<any>(`${this.apiURL}done-lists`);
  }

  getUserList() {
    return this.http.get<any>(`${this.apiURL}users-lists`);
  }
  getCheckboxList() {
    return this.http.get<any>(`${this.apiURL}checkbox-array-lists`);
  }

  getExpMonthList() {
    return this.http.get<any>(`${this.apiURL}exp-months`);
  }

  getDemoData() {
    return this.http.get<any>(`${this.apiURL}demo-data-lists`);
  }
  getDemoData1() {
    return this.http.get<any>(`${this.apiURL}demo-data1-lists`);
  }
}
