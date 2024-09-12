import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersDashboardComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //se exporta esto se ocupa para poder usar el componente en otros lugares
  exports: [
    UsersDashboardComponent,
  ]
})
export class UsersModule { }
