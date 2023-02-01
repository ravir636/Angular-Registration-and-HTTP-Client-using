import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { BehaviorSubject, catchError, delay, EMPTY, Observable, of, take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  data : User[]=[];
  user : User = {
    name: '',
    lastName: '',
    email: '',
    dob:'',
    gender: '',
    phone: '',
    password: ''
  };

  public content = new BehaviorSubject<any>(0);  
  public share = this.content.asObservable();   
  
  



  public getData(): Observable<User[]> {
    const url = "assets/user-data.json";
    return this.http.get<User[]>(url);
  }

  public getData1() {
    const url = "assets/user-data.json";
    return this.http.get<User[]>(url).pipe(delay(1000)).subscribe(
      data =>  this.data = data,
      err => console.log("error in http get data service"));
  }

  setData(user : User){
    //this.content.next(this.getData);
     this.data.push(user);
  }



  getNewData(){
    //this.getData1();
    return this.data;
  }
}
