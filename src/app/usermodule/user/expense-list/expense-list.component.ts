import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
   exp_data :any []
  constructor(private userservise : UserService) { }

  ngOnInit(): void {
   this.userservise.get_all_expense().subscribe((res:any)=>{
    if(res.message ==='no data found'){
   return 
    }
    this.exp_data = res
   })

    // this.userservise.get_user_expenses().subscribe((res:any)=>{
    //  this.exp_data = res
    // })
  }
  approve(id:string){
    this.userservise.user_approved(id , {approved : true}).subscribe((res:any)=>{
      console.log(res);
    })
// console.log(id);

  }

}
