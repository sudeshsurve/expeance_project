import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from "./Authmodule/sign-in/sign-in.component";
import { LoginComponent } from './Authmodule/login/login.component';
import { HttpClientModule } from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
     SignInComponent,
     LoginComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
