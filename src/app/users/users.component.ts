import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

     users: any[] = [];
    
  
    constructor(private userService: UserService) { }
  
    ngOnInit() {
      this.userService.getUsers().subscribe((data : any[])=>{
          console.log(data);
          this.users = data;
      })
    }

}
