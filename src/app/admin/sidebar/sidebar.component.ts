import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    Parse.User.logOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
