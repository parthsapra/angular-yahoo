import { Component } from '@angular/core';
import {YahooUser} from './yahoo.model'
import { FormBuilder,FormGroup,Validators } from "@angular/forms"
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:YahooUser = new YahooUser();
  submit(){
    console.log(this.user);
    if(this.user.firstName==""){
      alert("dsfdsf");
    }
  }
}
