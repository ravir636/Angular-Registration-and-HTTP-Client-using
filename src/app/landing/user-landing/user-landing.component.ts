import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent  {
  title = 'user-demo';
  data : User[] = [];
  searchText: string = '';

  constructor(private userService : UserServiceService){}

  ngOnInit() {
    this.userService.getData()
    .subscribe(
      data => {
        this.data = data;
        this.userService.getNewData().forEach(user =>{
          this.data.push(user);
        });
        //this.data.push(this.userService.getNewData());
        //this.getNewData();
      },
      err => console.log("error in http get data service"));
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.data.push(this.userService.getNewData());
  // }

 

}
