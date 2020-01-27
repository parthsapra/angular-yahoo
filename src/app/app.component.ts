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
  day:['Day',Validators.required],
  month:['Month',Validators.required],
  year:['Year',Validators.required],
  mobileNo:['',Validators.required],
  gender:['',Validators.required]
    })
  }
  submit(){
    if(this.userFormGroup.controls["firstName"].value==""){
      alert("fdfg");
    };
  }
}
