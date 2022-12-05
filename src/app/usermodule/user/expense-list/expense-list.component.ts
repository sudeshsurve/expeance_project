import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
   exp_data :any []
   isdataExist  : boolean | undefined
  constructor(private userservise : UserService) { }

  ngOnInit(): void {
   this.get_expense_list()
  }

get_expense_list(){
  this.userservise.get_all_expense().subscribe((res:any)=>{
    if(res.length > 0){
      this.exp_data = res
      this.isdataExist = true
      this.get_expense_list()
    }else{
      this.isdataExist = false
    }
   })
}
  approve(id:string){
    this.userservise.user_approved(id , {approved : true}).subscribe((res:any)=>{
      console.log(res);
    })
// console.log(id);

  }
   reject_req(id:string){
  console.log(id);
  
   }


}
