import { Component, OnInit } from '@angular/core';
import { Search } from "../Search";
import { UserRequestService } from '../user-request.service'
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
 repo:Repository[];

  constructor(private userService:UserRequestService) { }

  myRepoSearch(searchName) {
    this.userService.searchUsersRequest(searchName).then(
      (success)=>{
        this.repo = this.userService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      
  }

  ngOnInit(): void {
  }

}
