import { Component } from '@angular/core';
import {YahooUser} from './yahoo.model'
import { FormBuilder,FormGroup,Validators } from "@angular/forms"
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  user:YahooUser = new YahooUser();
  userFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.userFormGroup=this.formBuilder.group({
        firstName:['',Validators.required],
  lastName:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
  day:['',Validators.required],
  month:['',Validators.required],
  year:['',Validators.required],
  mobileNo:['',Validators.required],
  gender:['',Validators.required]
    })
  }
  submit(){
    console.log(this.user);
    if(this.user.firstName==""){
      alert("dsfdsf");
    }
  }
}
