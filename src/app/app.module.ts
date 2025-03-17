import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }