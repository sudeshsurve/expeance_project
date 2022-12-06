import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/user-interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userform: FormGroup
  states: any=[]
  cities :any =[]
  submitted = false



  username = new FormControl('',
    Validators.required,
  );
  email = new FormControl('',
    Validators.required,);

  age = new FormControl('',
    Validators.required,
  );

  state = new FormControl(null,
  [  Validators.required],
  );
  password = new FormControl('',
    Validators.required,
  );
  gender = new FormControl('',
    Validators.required,
  );
  role = new FormControl('',
    Validators.required,
  );
  city = new FormControl({ value: null, disabled: true },
   [ Validators.required,]
  ); 
  constructor(private userservice: UserService) {


     this.userservice.get_states().subscribe((res)=>{
     this.states = res
    })
    this.userform = new FormGroup({
      email: this.email,
      username: this.username,
      password: this.password,
      gender: this.gender,
      role: this.role,
      city: this.city,
      state: this.state,
      age: this.age,
    })

  }

  ngOnInit(): void {
    this.state.valueChanges.subscribe((state:any)=>{
      this.city.reset();
      this.city.disable();
      if(state){
      this.userservice.get_city(state).subscribe((res)=>{
      this.cities = res
      this.city.enable();
      })
      }
    })
  


  }

  clear() {
    this.userform.reset()
  }

  submit(data: user) {
    this.submitted = true
    if((this.email || this.age && this.username || this.password || this.city || this.gender || this.state || this.role).valid){
      console.log(data);
      this.userservice.post_user_data(data).subscribe(res => {
          console.log(res)
        })
        this.submitted = false
        this.userform.reset()
      }else{
        console.log("invalid");
      }
  }

}
