import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted= false
  constructor(public router :Router , public formbuilder : FormBuilder , private authservise : AuthService) { }

  ngOnInit(): void {

  if(this.authservise.isLogedin()){
    this.router.navigate(['/admin'])
  }


    this.loginform =  this.formbuilder.group({
      email : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)]],
      password : ['' , [ Validators.required , Validators.minLength(6)]]
    })

  }
  // singIn(){
  //   this.router.navigate(['/admin'])
  // }
  onsubmit(data:any){

    this.submitted = true

    // this.router.navigate(['/admin'])
    if(this.loginform.valid){
this.authservise.login(this.loginform.value)
      // this.loginform.reset()
    }
 
    
  }
}
