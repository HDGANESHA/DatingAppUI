import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(user:User)
  {
    //calling webservice 
    console.log(user);
    return this.httpClient.get(environment.roleUrl+"/api/users/search/"+user.UserName+"&"+user.Password);
  }
 
  public logOut(){
 
   
    localStorage.removeItem("UserName");
    localStorage.removeItem("AccessRole");
    sessionStorage.removeItem("UserName");
  }
 
}
