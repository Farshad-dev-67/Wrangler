import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IGetUsers} from '../../core/interfaces/iget-user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: IGetUsers;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.usersList = this.activatedRoute.snapshot.data.list;
  }

}
