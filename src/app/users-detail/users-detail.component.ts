import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/users/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  user: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log(params.get('id'))
     this.userService.getUser(params.get('id')).subscribe(c =>{
        console.log(c);
        this.user = c;
    })   
    });
     
  }
}


