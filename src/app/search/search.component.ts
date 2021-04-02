import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()
  
 
  constructor() { }

  

  ngOnInit(): void {
  }

  submitSearch(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}
