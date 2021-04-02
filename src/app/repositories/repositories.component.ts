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
 repo:Repository[];

  constructor(private repoService:RepoRequestService) { }

  myRepoSearch(searchName) {
    this.repoService.searchRepoRequest(searchName).then(
      (success)=>{
        this.repo = this.repoService.foundRepo;
      },
      (error)=>{
        console.log(error)
      }
    );
      
  }

  ngOnInit(): void {
  }

}
