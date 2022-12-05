import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { user } from '../user-interface';
import { catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }




  post_expense_data(body: any) {
   return this.http.post('http://localhost:3000/exp/expenses', body).subscribe((res) => {
      console.log(res);
    })
  }
  get_user_expenses() {
    let token = JSON.parse(localStorage.getItem('token') || '{}')
    const httpheaders = new HttpHeaders({
      'auth': `bearer ${token}`
    })
    return this.http.get<any>('http://localhost:3000/exp/user-expense', { headers: httpheaders }).pipe(catchError (err => of([])))
  }

  get_all_expense (){
    return this.http.get('http://localhost:3000/exp/all-expenses').pipe(catchError (err => of([])))
  }

  get_all_users(){
    return this.http.get<user[]>('http://localhost:3000/user/all-user')
  }

  user_approved(id:string , body:{approved: boolean}) {
    return this.http.put(`http://localhost:3000/exp/approve/` + id , body  ).pipe(catchError(err => of([])))
  }


  total_expense (){
    return this.http.get('http://localhost:3000/exp/totla-expense-report').pipe(catchError(err => of([])))
  }


  show_individual_user_data(expenses:any[],username?:string){
    let temp_array = []
    if(username){
      // temp_array = expenses.filter(e=>e.username==username)
    } else{
      temp_array = expenses;
    }
    let data:any = {}
    let months :any = {}
    let heads :any = {}
    temp_array.forEach(exp=>{
      let date = new Date(exp.date);
      let month = date.toLocaleString('default', { month: 'long' });
      let year = date.getFullYear();
      let key = month+' '+year;
      months[key] = true
      heads[exp.head] = true
      data[key] = data[key] || {}
      data[key][exp.head] = data[key][exp.head] || 0
      data[key][exp.head] =  data[key][exp.head] + exp.amount
    })
    return {
      data : data,
      months : Object.keys(months),
      heads : Object.keys(heads)}
  }
    
  get_user_info(){
    const role = localStorage.getItem('token')
    if(role){
    let user_role =JSON.parse(atob(role.split('.')[1]))
    return user_role
    }
  }


}
