import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/service/admin.guard';
import { ManagerAccessGuard } from 'src/app/service/manager-access.guard';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { TotalExpenseReportComponent } from './total-expense-report/total-expense-report.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path :"" , component:AdminComponent,
  children:[
    {path:"dashbord", component:DashbordComponent },
    {path:"user-list", component:UserListComponent ,  },
    {path:"user-form", component:UserFormComponent , canActivate:[AdminGuard] },
    {path:"expense-report", component:ExpenseReportComponent },
    {path:"expense-list", component:ExpenseListComponent , canActivate:[ManagerAccessGuard] },
    {path:"totla-expense-report", component:TotalExpenseReportComponent, canActivate:[ManagerAccessGuard]  },
    {path:"expense-form", component:ExpenseFormComponent },
    {path:"" , pathMatch:'full' , redirectTo:'/admin/dashbord' },

  ]
} 
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
