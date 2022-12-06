import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-total-expense-report',
  templateUrl: './total-expense-report.component.html',
  styleUrls: ['./total-expense-report.component.css']
})
export class TotalExpenseReportComponent implements OnInit {
  total_exp : any []
  months:any[] = []
  heads : any[]= [ ]
  data :any = {}
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
      this.total_exp_report()
  }


  total_exp_report(){
    this.userservice.total_expense().subscribe((res:any)=>{
      this.total_exp = res
      console.log(this.total_exp);
      
      if(this.total_exp.length > 0){
        const calulated_expense  = this.userservice.show_individual_user_data(this.total_exp)
        this.months = calulated_expense.months
        this.data = calulated_expense.data
        this.heads = calulated_expense.heads

      }
     })
  }

}
