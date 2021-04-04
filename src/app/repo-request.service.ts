import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  foundRepo:Repository[];

  constructor(private http: HttpClient) {
    this.foundRepo;
   }

   searchRepoRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: Repository[];
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
      this.http.get<ApiResponse>('https://api.github.com/search/repositories', options).toPromise().then(response=>{
        this.foundRepo = response.items
        resolve()
      },
      error=>{
        this.foundRepo = []

        reject(error)
      })
    })
    return promise
  }

  searchRepoByUsernameRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: Repository[];
    }
    let options = {}
    if (environment.apiKey) {
      options['headers'] = {
        'Authorization': 'Basic ' + btoa(environment.apiKey)
      }
    }
    const url = `https://api.github.com/users/${searchName}/repos`;
    
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<Repository[]>(url, options).toPromise().then(response=>{
        this.foundRepo = response
        resolve()
      },
      error=>{
        this.foundRepo = []

        reject(error)
      })
    })
    return promise
  }
}
