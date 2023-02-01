import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserLandingComponent } from 'src/app/landing/user-landing/user-landing.component';
import { UserServiceService } from 'src/app/service/user-service.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  model: User = {
    name: '',
    lastName: '',
    email: '',
    gender: '',
    dob:'',
    phone: '',
    password: ''
  };
  confirmpassword: string = '';

  constructor(private router: Router, private userServiceService : UserServiceService) { }

  register() {
    if (this.model.password !== this.confirmpassword) {
      alert("Passward is not matching")
    } else {
      console.log(this.model);
      this.userServiceService.setData(this.model);
      this.router.navigate(['/landing']);
    }

  }

}
