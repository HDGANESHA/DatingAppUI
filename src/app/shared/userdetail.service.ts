import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Userdetail } from './userdetail';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
  userdetail: Userdetail[];
  formData: Userdetail = new Userdetail();
  mosthobby: Userdetail;
  constructor(private httpClient: HttpClient) { }

  bindListUserDetails() {

    this.httpClient.get(environment.apiUrl + '/api/userdetails/getall')

      .toPromise().then(

        response => {

          console.log("from service");

          console.log(response);

          this.userdetail = response as Userdetail[];


        }

      );

  }



  deleteUserDetail(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/userdetails/" + id);
  }
  getUserDetail(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/userdetails/" + id);
  }

  insertUserDetail(userdetail: Userdetail): Observable<any> {
    console.log(userdetail);
    return this.httpClient.post(environment.apiUrl + "/api/userdetails", userdetail);
  }
  updateUserDetail(userdetail: Userdetail): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/userdetails", userdetail);
  }
  userHobby() {

    return this.httpClient.get(environment.apiUrl + "/api/userdetails/getmosthobby");


  }
}
