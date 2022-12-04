import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users :any = []
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.get_all_users().subscribe((res:any)=>{
      this.users = res
      console.log(res);
      
    })
  }

}
