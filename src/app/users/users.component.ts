import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User

  constructor(private userService:UserRequestService) { }

  ngOnInit(): void {
  }

}
