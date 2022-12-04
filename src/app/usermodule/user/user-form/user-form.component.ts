import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  expense_form : FormGroup
   
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.expense_form = this.fb.group({
       date : ['' , Validators.required],
       username : ['' , Validators.required],
       head : ['' , Validators.required],
       amount : ['' , Validators.required],
        paid_to: ['' , Validators.required],
        approve :false
   })

  }

  submit(){
        
  }

}
