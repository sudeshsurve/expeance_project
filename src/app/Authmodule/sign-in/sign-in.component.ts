import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  sign_in_form_data:any ={
    username:'',
    password:'',
    // checkbox: true
  }


  constructor(public router :Router) { }

  ngOnInit(): void {
    console.log("sign-up");
    
  }
  sign_in() {
  
  }


}
