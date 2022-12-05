import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { user } from "../../../../app/user-interface"
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users$ :Observable<user[]> 
  constructor(public userservice : UserService) { }

  ngOnInit(): void {
   this.users$ =  this.userservice.get_all_users()
  
  }

}
