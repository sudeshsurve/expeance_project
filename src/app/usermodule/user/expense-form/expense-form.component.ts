import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/user-interface';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
 expense_form : FormGroup
 submitted = false
 error :  Error | null = null
 username :any = []
  constructor(private fb : FormBuilder , private userservise : UserService) { }

  ngOnInit(): void {
    this.userservise.get_all_users().subscribe((res:any)=>{
       res.forEach((x:user)=>{
         if(x.role == 'employe'){
          this.username.push(x.username)
        }
        
       })
  })


    this.expense_form = this.fb.group({
      date : ['' , Validators.required],
      username : ['' , Validators.required],
      head : ['' , Validators.required],
      amount : [ , Validators.required],
      paid_to: ['' , Validators.required],
      
  })

      


  }

  submit(){
    try {
      this.submitted = true
    if(this.expense_form.valid){
      this.userservise.post_expense_data(this.expense_form.value )
      this.submitted = false
      this.expense_form.reset()
    }
    } catch (error) {
      if(error instanceof Error){
      this.error = error
      }
    }
    
  }

}
