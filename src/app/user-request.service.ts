import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  foundUser:User[];

  constructor(private http: HttpClient) { 
    this.foundUser;
  }

  searchUsersRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: User[];
    }
    let options = {
      params: {
        'q': searchName,
      }
    }
    if (environment.apiKey) {
      options['headers'] = {
        'Authorization': 'Basic ' + btoa(environment.apiKey)
      }
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/search/users', options).toPromise().then(response=>{
        this.foundUser = response.items
        resolve()
      },
      error=>{
        this.foundUser = []

        reject(error)
      })
    })
    return promise
  }
}
