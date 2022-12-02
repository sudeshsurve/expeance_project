import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public success_msg : undefined | boolean = false
  registerForm! : FormGroup
  submitted = false
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  

  constructor(public router :Router, public formbuilder : FormBuilder) { 
  this.registerForm = this.formbuilder.group({
    Name : ['' ,[ Validators.required , Validators.minLength(4)]],
      email : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)]],
      password : ['' , [ Validators.required , Validators.minLength(6)]]
  })
}
  ngOnInit(): void {
  
  }
  onSubmit(data:any) {
  console.log(data);
  
  }


}
