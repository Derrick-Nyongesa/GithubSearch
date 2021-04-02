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

   searchReposRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: Repository[];
    }
    let options = {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.apiKey)
      },
      params: {
        'q': searchName,
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
}
