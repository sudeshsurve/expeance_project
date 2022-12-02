import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { TotalExpenseReportComponent } from './total-expense-report/total-expense-report.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    UserListComponent,
    UserFormComponent,
    ExpenseReportComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    TotalExpenseReportComponent,
    DashbordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class UserModule { }
