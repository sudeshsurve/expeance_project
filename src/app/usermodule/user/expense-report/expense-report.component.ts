import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {
  months:any[] = []
  heads : any[]= [ ]
  data :any = {}

  constructor(private userservice : UserService) { }
   user_exp_report : any []
  ngOnInit(): void { 
    this.user_report()
  }
  user_report(){
    this.userservice.get_user_expenses().subscribe((res:any)=>{
      this.user_exp_report = res
      console.log(this.user_exp_report);
      const calulated_expense  = this.userservice.show_individual_user_data(this.user_exp_report)
      this.months = calulated_expense.months
      this.data = calulated_expense.data
      this.heads = calulated_expense.heads
       console.log(this.months)
       
    })
    
    
  }

}
