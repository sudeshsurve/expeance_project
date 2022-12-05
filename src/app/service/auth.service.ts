import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient , private router : Router) {
// console.log(JSON.parse(this.getToken()) );
console.log(this.isLogedin());


   }


isLogedin():boolean{
 return this.getToken() !== null
// return this.getToken()
}
 


getToken():string | null{
  return localStorage.getItem('token')
}

 setToken(token:string){
  localStorage.setItem('token' ,JSON.stringify(token))
 } 


login(body:{email:string , password:string}){
this.http.post('http://localhost:3000/api/login' , body).subscribe((res:any)=>{
  try {
    if(res){ 
 this.setToken(res.token)
 this.router.navigate(['/admin']) 
  }
  } catch (error) {
    console.log(error);
  }
  
})
}




}
