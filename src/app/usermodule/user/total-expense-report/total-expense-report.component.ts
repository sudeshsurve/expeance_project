import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-total-expense-report',
  templateUrl: './total-expense-report.component.html',
  styleUrls: ['./total-expense-report.component.css']
})
export class TotalExpenseReportComponent implements OnInit {

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
      this.get_total_expense()
  }

  get_total_expense(){
 this.userservice.total_expense().subscribe((res)=>{
  console.log(res);
 })


  }



}
