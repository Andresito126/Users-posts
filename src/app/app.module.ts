import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditUserFormComponent } from './users/edit-user-form/edit-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserFormComponent
  ],
  //aca se importan todos los componentes que vas creando 
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    //
    HttpClientModule,
    FormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
