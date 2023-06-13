import { Component } from '@angular/core';
import { UserServiceApi } from '../../service/user.service';
import { DataUser } from '../../interface/user.interface';

@Component({
  selector: 'app-traer-user',
  templateUrl: './traer-user.component.html',
  styleUrls: ['./traer-user.component.css']
})
export class TraerUserComponent {

  // Method for know which title have
  GET: string = "GET";

  constructor(public userSer: UserServiceApi){}

  listArr: any[]=[];

  loadStatus:boolean = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.userSer.getUsers(2).subscribe(
        (data)=>{
          this.listArr = data;
          this.loadStatus=true;
          console.log(this.listArr)
        }
      )
    }, 1000);
    this.loadStatus=false;
  }
}
