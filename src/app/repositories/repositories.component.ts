import { Component, OnInit } from '@angular/core';
import { Search } from "../Search";
import { RepoRequestService } from '../repo-request.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
 repos:Repository[];

  constructor(private repoService:RepoRequestService) { }

  myRepoSearch(searchName) {
    this.repoService.searchRepoByUsernameRequest(searchName).then(
      (success)=>{
        this.repos = this.repoService.foundRepo;
      },
      (error)=>{
        console.log(error)
      }
    );
      
  }

  ngOnInit(): void {
    this.myRepoSearch('Derrick-Nyongesa');
  }

}
