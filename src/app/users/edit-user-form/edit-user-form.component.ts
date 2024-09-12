import { Component } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']})
export class EditUserFormComponent {

   user :Iuser={
    id: 1,
    name: "",
    email: "",
    phone: "",
    website: ""
  }

  constructor(private _service: UserService){
    this._service.get().subscribe(
      response => this.user =response
    )
  }
  mostrar(): void{
    console.log(this.user)
  }

}
