import { Component, OnInit } from '@angular/core';
import { RoleService } from './../../user/role.service';

@Component({
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  user;
  
  constructor(public roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.user$.subscribe(user => this.user = user)
  }

}
