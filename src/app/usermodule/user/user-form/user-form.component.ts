import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 userform: FormGroup
   
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.userform= this.fb.group({
       email : ['' , Validators.required],
       username : ['' , Validators.required],
       password : ['' , Validators.required],
       gender : ['' , Validators.required],
        role: ['' , Validators.required],
        city: ['' , Validators.required],
       
   })

  }

  submit(){
        
  }

}
