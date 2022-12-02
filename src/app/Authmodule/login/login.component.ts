import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted= false
  constructor(public router :Router , public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginform =  this.formbuilder.group({
      username : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)]],
      password : ['' , [ Validators.required , Validators.minLength(6)]]
    })

    
  }
  // singIn(){
  //   this.router.navigate(['/admin'])
  // }
  onsubmit(data:any){
    this.submitted = true
    if(this.loginform.valid){
      console.log(data);
      this.loginform.reset()
    }
    else{

    }
    
    
  }
}
