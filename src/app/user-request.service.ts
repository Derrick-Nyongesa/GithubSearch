import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:User;

  constructor(private http: HttpClient) { 
    this.user = new User("", "", "", "");
  }

  searchUsersRequest(searchName: string){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      followers_url: string;
      following_url: string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/search/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.followers_url = response.followers_url
        this.user.following_url = response.following_url
        
        resolve()
      },
      error=>{
        this.user.login = "You got an error"

        reject(error)
      })
    })
    return promise
  }
}
