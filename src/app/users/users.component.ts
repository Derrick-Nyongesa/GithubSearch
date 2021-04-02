import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../user';
import { Search } from "../Search";
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  searchName = "Derrick-Nyongesa";
  searchInput = new Search('Derrick-Nyongesa')

  constructor(private userService:UserRequestService) { }

  mySearch(searchName) {
    this.userService.searchUsersRequest(searchName).then(
      (success)=>{
        this.users = this.userService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      
  }

  ngOnInit(): void {
  }

}
